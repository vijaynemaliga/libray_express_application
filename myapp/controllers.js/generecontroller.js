const Genre = require("../models/genere");
const asyncHandler = require("express-async-handler");
const Book = require("../models/book");
const { body, validationResult } = require("express-validator");
exports.genre_list = asyncHandler(async (req, res, next) => {
    let genere_list=await Genre.find().sort({name:1}).exec()
    res.render('genre_list',{title:this.genre_list,allgenrelist:genere_list})
  });
  
  // Display detail page for a specific Genre.
  exports.genre_detail = asyncHandler(async (req, res, next) => {
    let [genre,bookdetails]= await Promise.all([
      Genre.findById(req.params.id).exec(),
      Book.find({ genre: req.params.id }, "title summary").exec(),
     ])
    res.render('genre_details',{title:"genre details",bookdetails,genre})
  });
  
  // Display Genre create form on GET.
  exports.genre_create_get = asyncHandler(async (req, res, next) => {
    res.render('genre_form',{ title: "Create Genre",errors:"" })
  });
  
  // Handle Genre create on POST.
  exports.genre_create_post = [
    body('name',"name shoulsd be minimum 3 letters")
    .trim().
    isLength({min:3}).
    escape(),
    asyncHandler(async (req, res, next) => {
          const errors=validationResult(req)
          const genre= new Genre({name:req.body.name})
          if(!errors.isEmpty())
          {
            res.render("genre_form", {
              title: "Create Genre",
              genre: genre,
              errors: errors.array(),
            });
          }
          else{
          const genreExists = await Genre.findOne({ name: req.body.name }).exec();
          if (genreExists) {
            // Genre exists, redirect to its detail page.
            res.redirect(genreExists.url);
          } else {
            await genre.save();
            // New genre saved. Redirect to genre detail page.
            res.redirect(genre.url);
          }
        }
  })]
  
  // Display Genre delete form on GET.
  exports.genre_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete GET");
  });
  
  // Handle Genre delete on POST.
  exports.genre_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete POST");
  });
  
  // Display Genre update form on GET.
  exports.genre_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre update GET");
  });
  
  // Handle Genre update on POST.
  exports.genre_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre update POST");
  });