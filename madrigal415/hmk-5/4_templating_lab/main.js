/* Convert the existing web page, which contains data hard coded in HTML,
 * to instead pull the data from a data object into a structure created by a 
 * Handlebars template.
 * Specify your JavaScript app using an object rather than a set of functions.
 */

// create or reference content
var App = {};

App.recipes = {
    "recipeDesc" : [
      {
        recipeName: 'Shakshuka',
        servings: 4,
        meal: "breakfast"
      },
      {
        recipeName: 'Black Bean Chili',
        servings: 8,
        meal: "dinner"
      },
      {
        recipeName: 'Classic Peanut Butter Cookies',
        servings: 8,
        meal: "dessert"
      }
    ]

};

// create template in INDEX.HTML
App.build = function() {
  var source = $("#recipeTemplate").html();
  // Handlebars compiles the template into a callable function
  var template = Handlebars.compile(source);
  
  // call the compiled function with the template data
  var compiledTemplate = template(App.recipes);
  return compiledTemplate;
};

$("document").ready(function() {
  $("body").append(App.build);
});