import AddNewCourse from "./add-new-course";
import React, { useState } from "react";

function CourseManager(){

  const [showNewCourse, setshowNewCourse] = useState(true);

  if(showNewCourse){

    return(
      <div>
   




<div class="container">
<div class="card mt-2">
<div class="card-body d-flex justify-content-between">
  <h5 class="card-title">Courses</h5>
  <button onClick={() => setshowNewCourse(!showNewCourse)} class="btn btn-primary">
  <i class="bi bi-plus-circle"></i>&nbsp;
    Add new course
  </button>
</div>
</div>
<br/>
<div class="row">
  <div class="col">
  <div class="text-center border">
      <i class="bi bi-person fs-1"></i>
      <h3>451</h3>
      <p class="text-muted font-15 mb-0">Active courses</p>
    </div>
  </div>
  <div class="col">
  <div class="text-center border">
      <i class="bi bi-briefcase fs-1"></i>
      <h3>03</h3>
      <p class="text-muted font-15 mb-0">Pending courses</p>
    </div>
  </div>
  <div class="col">
  <div class="text-center border">
      <i class="bi bi-book fs-1"></i>
      <h3>44</h3>
      <p class="text-muted font-15 mb-0">Draft courses</p>
    </div>
  </div>
  <div class="col">
  <div class="text-center border">
      <i class="bi bi-book fs-1"></i>
      <h3>40</h3>
      <p class="text-muted font-15 mb-0">Free courses</p>
    </div>
  </div>
  <div class="col">
  <div class="text-center border">
      <i class="bi bi-book fs-1"></i>
      <h3>78</h3>
      <p class="text-muted font-15 mb-0">Paid courses </p>
    </div>
  </div>
</div>
</div>

<br/><br/>

<div class="container">
<h6>COURSE LIST</h6>
<div class="row">
  <div class="col">
  <small>Categories</small>
    <div class="input-group mb-3">
      <select class="form-select" id="dropdown1">
        <option selected>All</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  </div>
  <div class="col">
  <small>Status</small>
    <div class="input-group mb-3">
      <select class="form-select" id="dropdown2">
        <option selected>All</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  </div>
  <div class="col">
  <small>Price</small>
    <div class="input-group mb-3">
      <select class="form-select" id="dropdown3">
        <option selected>All</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </div>
  </div>
  <div class="col">
    <button class="btn btn-primary w-100 mt-4" type="button">Filter</button>
  </div>
</div>
</div>


<div class="container">
<div class="row">
  <div class="col">
    <div class="input-group mb-3">
      <span class="input-group-text">Show</span>
      <select class="form-select-sm">
        <option selected>10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span class="input-group-text">entries</span>
    </div>
  </div>
  <div class="col">
    <div class="input-group mb-3">
      <span class="input-group-text">Search:</span>
      <input type="text" class="form-control" placeholder="Search..."/>
    </div>
  </div>
</div>
<div class="table-responsive">
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>Lesson</th>
        <th>Section</th>
        <th>Enrolled Students</th>
        <th>Status</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Course 1</td>
        <td>Category A</td>
        <td>Lesson 1</td>
        <td>Section 1</td>
        <td>50</td>
        <td>Active</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Course 2</td>
        <td>Category B</td>
        <td>Lesson 2</td>
        <td>Section 2</td>
        <td>25</td>
        <td>Inactive</td>
        <td>$50</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Course 3</td>
        <td>Category A</td>
        <td>Lesson 3</td>
        <td>Section 3</td>
        <td>10</td>
        <td>Active</td>
        <td>$75</td>
      </tr>
    </tbody>
  </table>
</div>
</div>




      </div>
  )

  }else{
    return <AddNewCourse/>
  }

}
export default CourseManager;