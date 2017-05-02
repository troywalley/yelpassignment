 
function foodSearch(){
	 this.results=[];
	 var search=this;
	 this.newSearch=newSearch
	 this.listResults=listResults
	 var searchButton=document.getElementsByClassName("search-button")[0]
	 var yoursearch=document.getElementsByClassName("searchbar")[0]
	 var location=document.getElementsByClassName("location")[0]
	 var searchresultscontainer=document.getElementsByClassName("searchresultscontainer")[0]
	 searchButton.addEventListener("click", function(){
	 	var mylocation=location.value;
	 	var mysearch=yoursearch.value;
	 	search.newSearch(mysearch,mylocation)
	 })
	




	function listResults(){
		var removedivs=searchresultscontainer.childNodes.length;
		
		for(var i=0;i<removedivs;i++){
			
			searchresultscontainer.removeChild(searchresultscontainer.lastChild)
		};
		this.results.forEach(function(object){
			var newpic=document.createElement("div");
			newpic.style.backgroundImage="url('"+object.image_url+"')"
			newpic.style.backgroundSize="100% 100%"
			newpic.style.height="300px"
			newpic.style.width="300px"
			var title=document.createElement("div")
			title.innerHTML=object.name
			title.style.width="30%"

			var newdiv=document.createElement("a")
			newdiv.target="_blank"
			newdiv.href=object.url
			newdiv.classList.add("individualresults")
			searchresultscontainer.appendChild(newdiv)
			newdiv.appendChild(newpic)
			newdiv.appendChild(title)
			var address=document.createElement("div")
			address.style.width="30%"
			address.innerHTML=object.location.address[0]+" "+object.location.city
			newdiv.appendChild(address)

		})
	}

	function newSearch(term, location){
		search.results=[];
		 $.ajax({
		         url: "https://yelp-search.herokuapp.com/search",
		         method: "GET",
		         data: {
		         	term:term,
		         	location:location
		        },
		         success: function(response){
		             console.log(response);
		             response.businesses.forEach(function(business){
		             	search.results.push(business);
		             	
		             })
		             search.listResults();
		         }

		     })
		}
}
var search=new foodSearch();