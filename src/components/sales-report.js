import DateFilter from "./date-filter";

function SalesReport(){

    return (
        <div>
            <div class="card mt-2">
                <div class="card-body d-flex justify-content-between">
                <h5 class="card-title">Sales Report</h5>

                </div>
                </div>
                <br/>
            <DateFilter/>

            <br/>  
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
    );
}
export default SalesReport;