    "use strict";

class App {

	constructor() {
		this.display = [
		{
		  "id":1,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f1.jpg",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":2,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f2.jpg",
           "description":"A classic daisy, imported from Europe. It is reputed to give milk a bad taste if ingested in quantity by the cows. Recently placed in a new genus, on the basis of genetic studies. "
		   
		 },

		 {
		  "id":3,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f1.jpg",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		{
		  "id":4,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f1.jpg",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":5,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f1.jpg",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":6,
		  "name:":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f1.jpg",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":7,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f7.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":8,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f8.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":9,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f9.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":10,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f10.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":11,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f11.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":12,
		  "name:":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f12.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":13,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f13.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":14,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f14.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":15,
		  "name:":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f15.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":16,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f16.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":17,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f17.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":18,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f18.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":19,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f19.JPG",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 },	

		 {
		  "id":20,
		  "name":"Scentasya Eden",
		  "price:":"129.00",
		  "photo":"images/f20.jpg",
           "description":"It is suitable for  windows view and gardening under the sun"
		   
		 }		           
			];


		this.state = [
			{
				"bind": {
					"flowers_list":[],
					"afordable_choice":[],
					"scientific_name":[]
				}
			}
		];
    }


 render(html, component) {
		component.innerHTML += html;
    }


 reRender(html, component) {

		component.innerHTML = html;
	}

      
    createPricing() {


				let id = document.getElementById('flowers_id');
				let name = document.getElementById('flowers_name');
				let price = document.getElementById('flowers_price');
				let photo = document.getElementById('flowers_photo');
				let description = document.getElementById('flowers_description');
		        let dis = document.getElementById('app');
		       

		        let flowers_category = [];
		    for (let i=0;i<this.state[0].bind.flowers_list.length;i++){
			    
			    flowers_category.push({

			     "name" : this.state[0].bind.scientific_name[i],
				 "price" : this.state[0].bind.afordable_choice[i]
			   });
		   }
  


		   let display = {
              
             "id": id.value,
		     "name": name.value,
		     "price": price.value,
		     "photo": photo.value,
             "description": description.value
		    };

		     this.display.push(display);
		     //Clear field

		this.state[0].bind.procedures = this.state[0].bind.ingredients_qty = this.state[0].bind.ingredients_name = [];
		id.value = name.value = description.value = photo.value = preparationtime.value = cookingtime.value = yields.value = '';      


   }
		     
					deleteList(key) {

				 let r = this.display;

				  for(let i=0;i<r.length;i++){
					if(r[i].id == key){
						this.display.splice(i,1);
						break;
					}
		     }
		       this.recipeLayout();
		}



	findDisplayByID(id){
		let r = this.display;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}	

	findDisplayByName(name){
		let objects = [];
		let r = this.display;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}


			updateDetails() {

		         let y = document.getElementById('app');
			}





}


class Component extends App {

	constructor() {
		super();
	}
             
       shopLayout(){

             	let html = `

<div id="shopLayout" class="container">
 <nav>
    <div class="nav-wrapper">
      <a href="#"  onclick="component.shopLayout()"" class="brand-logo"><img src="images/logo.png"</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#" onclick="component.shopCreate()">Create</a></li>
        <li><a class="waves-effect waves-light btn">Search Flower</a></li>
        <li><a class="waves-effect waves-light btn-large">A large button</a></li>
      </ul>
    </div>
  </nav>             	
                  
                <div id="displayImage"></div>
				<div id="recipeView"></div>
				<div id="recipeList"></div>
				<div id="shopCreate"></div>

        
 <div class="col s12 m7">
    <h2 class="header">Horizontal Card</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="images/f3.JPG">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p class="z-depth-5">I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>


--------------------------------------------------------------------------------------------

   <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
</div>

             	`;

       this.reRender(`
			${html}

			`,document.getElementById("app"));    
            this.displayImage();
   }

displayImage(){
		
		let html = `
			<h5 class="center-align">Choose your Flower</h5>
			<div class="row">
		`;

		let r = this.display;
		let count = 0;
		for(let i=(r.length-1);i>=0;i--){
			if(count++ === 6)break;
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.flowersView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}


		html += `</div>`;

		this.render(`		
			${html}
			`,document.getElementById("displayImage"));
   
    }	

    displayView(id){
		let r = this.findDisplayByID(id);

		let html = `
			<h5 class="center-align">${r.name}</h5>
			<div class="row">				
				<div class="col s12 m12">
					<div class="card horizontal small">
						<div class="card-image">
							<img src="${r.photo}">
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<p>${r.description}</p>
							</div>
							<div class="card-action small">								
								<span onclick="component.deleteRecipe(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
								<span onclick="component.recipeLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
							</div>
						</div>					
					</div>				
				</div>			
			</div>
		`;

		html += `
			<div class="row">
				<table class="striped">
					<thead>
						<tr>
							<th>Preparation Time</th>
							<th>Cooking Time</th>
							<th>Yields</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${r.preparationtime}</td>
							<td>${r.cookingtime}</td>
							<td>${r.yields}</td>
						</tr>					
					</tbody>
				</table>
			</div>
		`;

		html += `
			<div class="row">				
				<div class="col s6 m6">
					<h6>Ingredients</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.ingredients.length;i++){
			let ri = r.ingredients[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">star</i>
							<span class="title">${ri.qty}</span>
							<p>${ri.name}<br>
								
							</p>
							
						</li>
			`;
		}

		html += `				
					</ul>
				</div>
				<div class="col s6 m6">
					<h6>Procedure</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.procedure.length;i++){
			let rp = r.procedure[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">done</i>
							<span class="title">Step ${i+1}</span>
							<p>${rp}<br>
								
							</p>
							
						</li>
			`;
		}	

		html += `
					</ul>
				</div>			
			</div>
		`;

		this.reRender(`		
			${html}			
			`,document.getElementById("recipeView"));
		$('#displayView').show();
		$('#displayImage').hide();
		$('#displayList').hide();
		$('#displayCreate').hide();
		this.state[0].bind.flowers_list = [];		
		this.state[0].bind.scientific_name = [];		
		this.state[0].bind.afordable_choice = [];	
	}


                    
                    shopListInfo(){

                    	this.reRender(html,document.getElementById('shopListInfo'));


                    }
  		

				 shopCreate(){
						let html = `
                        <div class="row">
    <form class="col s12">
      <div class="row">
         <h5 class="center-align">Insert new Flower</h5>
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input disabled value="I am not editable" id="disabled" type="text" class="validate">
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email" type="email" class="validate">
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
      </div>
    </form>
  </div>`;

		this.render(`
			${html}`

			, document.getElementById("shopCreate"));
             $('#shopCreate').show();
		     $('#recipeList').hide();
		     $('#recipeView').hide();
		     $('#displayImage').hide();
		this.state[0].bind.procedures = [];		
		this.state[0].bind.ingredients_qty = [];		
		this.state[0].bind.ingredients_name = [];

	 }

				 shopUpdate(key){
						this.reRender( `
								 
					   `,document.getElementById('')
					 );			 
				  }

      }  

   let component = new Component();
    component.shopLayout();