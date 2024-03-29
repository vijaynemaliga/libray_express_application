const BookInstance = require("../models/bookInstance");
const asyncHandler = require("express-async-handler");

exports.bookinstance_list = asyncHandler(async (req, res, next) => {
     let book_instances_list= await BookInstance.find().populate('book').exec()

     res.render("book_instances_list",{
      title:'book_instances_list',
      allbookslist:book_instances_list,
     })
  });
  
  // Display detail page for a specific BookInstance.
  exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
        const bookinstance= await BookInstance.findById(req.params.id).populate('book').exec()
        res.render("bookinstance_detail", {
          title: "Book:",
          bookinstance,
        });
  });
  
  // Display BookInstance create form on GET.
  exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create GET");
  });
  
  // Handle BookInstance create on POST.
  exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
  });
  
  // Display BookInstance delete form on GET.
  exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
  });
  
  // Handle BookInstance delete on POST.
  exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
  });
  
  // Display BookInstance update form on GET.
  exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
  });
  
  // Handle bookinstance update on POST.
  exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
  });