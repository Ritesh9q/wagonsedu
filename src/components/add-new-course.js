import { useState } from "react";


function AddNewCourse() {
  const [activeTab, setActiveTab] = useState(1);

  const handlePrevTab = () => {
    setActiveTab(activeTab - 1);
  };

  const handleNextTab = () => {
    setActiveTab(activeTab + 1);
  };

  const isFirstTab = activeTab === 1;
  const isLastTab = activeTab === 7;

  return (
    <div className="container mt-3">
      <h4 className="text-start mb-3">ADD NEW COURSE</h4>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Basic
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Requirements
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 3 ? "active" : ""}`}
            onClick={() => setActiveTab(3)}
          >
            Outcomes
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 4 ? "active" : ""}`}
            onClick={() => setActiveTab(4)}
          >
            Pricing
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 5 ? "active" : ""}`}
            onClick={() => setActiveTab(5)}
          >
            Media 
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 6 ? "active" : ""}`}
            onClick={() => setActiveTab(6)}
          >
            SEO
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 7 ? "active" : ""}`}
            onClick={() => setActiveTab(7)}
          >
            Finish
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}>
        <div className="container col-lg-9 col-md-9 p-5">
        <form className="mt-10">
  <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Course Title</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Short Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <textarea  class="form-control" rows={5}></textarea>
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Category</label>
    <div class="col-sm-10">
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Select a Category</option>
      <option value="1">March 2023</option>
      <option value="2">Feb 2023</option>
      <option value="3">Jan 2023</option>
    </select>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Level</label>
    <div class="col-sm-10">
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Beginner</option>
      <option value="1">Advanced</option>
      <option value="2">Intermediate</option>
    </select>
    </div>
  </div>
  <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Duration</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputEmail3"/><br/>

        <input class="form-check-input m-1" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Check if this course is top course
        </label><br/><br/>
        <input class="form-check-input m-1" type="checkbox" id="gridCheck2"/>
        <label class="form-check-label" for="gridCheck1">
          Check if this course is expire course
        </label>

    </div>

  </div>

  {!isFirstTab && (
                  <button
                    type="button"
                    className="btn btn-secondary float-start"
                    onClick={handlePrevTab}>
                    &lt; Prev
                  </button>
                  )}
                  {!isLastTab && (
              <button
                type="button"
                className="btn btn-secondary float-end"
                onClick={handleNextTab}
              >
                Next &gt;
              </button>
            )}
</form>
</div>
        </div>
        <div className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}>
        <div className="container col-lg-9 col-md-9 p-5">
        <form className="mt-10">
  <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Course Title</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Short Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <textarea  class="form-control" rows={5}></textarea>
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Category</label>
    <div class="col-sm-10">
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Select a Category</option>
      <option value="1">March 2023</option>
      <option value="2">Feb 2023</option>
      <option value="3">Jan 2023</option>
    </select>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Level</label>
    <div class="col-sm-10">
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Beginner</option>
      <option value="1">Advanced</option>
      <option value="2">Intermediate</option>
    </select>
    </div>
  </div>
  <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Duration</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputEmail3"/><br/>

        <input class="form-check-input m-1" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Check if this course is top course
        </label><br/><br/>
        <input class="form-check-input m-1" type="checkbox" id="gridCheck2"/>
        <label class="form-check-label" for="gridCheck1">
          Check if this course is expire course
        </label>

    </div>

  </div>

  {!isFirstTab && (
                  <button
                    type="button"
                    className="btn btn-secondary float-start"
                    onClick={handlePrevTab}>
                    &lt; Prev
                  </button>
                  )}
                  {!isLastTab && (
              <button
                type="button"
                className="btn btn-secondary float-end"
                onClick={handleNextTab}
              >
                Next &gt;
              </button>
            )}
</form>
</div>
        </div>
       
        <div className={`tab-pane fade ${activeTab === 3 ? "show active" : ""}`}>
        <div className="container col-lg-9 col-md-9 p-5">
        <form className="mt-10">
  <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Course Title</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Short Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <textarea  class="form-control" rows={5}></textarea>
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Category</label>
    <div class="col-sm-10">
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Select a Category</option>
      <option value="1">March 2023</option>
      <option value="2">Feb 2023</option>
      <option value="3">Jan 2023</option>
    </select>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Level</label>
    <div class="col-sm-10">
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Beginner</option>
      <option value="1">Advanced</option>
      <option value="2">Intermediate</option>
    </select>
    </div>
  </div>
  <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Duration</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputEmail3"/><br/>

        <input class="form-check-input m-1" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Check if this course is top course
        </label><br/><br/>
        <input class="form-check-input m-1" type="checkbox" id="gridCheck2"/>
        <label class="form-check-label" for="gridCheck1">
          Check if this course is expire course
        </label>

    </div>

  </div>

  {!isFirstTab && (
                  <button
                    type="button"
                    className="btn btn-secondary float-start"
                    onClick={handlePrevTab}>
                    &lt; Prev
                  </button>
                  )}
                  {!isLastTab && (
              <button
                type="button"
                className="btn btn-secondary float-end"
                onClick={handleNextTab}
              >
                Next &gt;
              </button>
            )}
</form>
</div>
        </div>


        <div className={`tab-pane fade ${activeTab === 4 ? "show active" : ""}`}>
        <div className="container col-lg-9 col-md-9 p-5">
        <form className="mt-10">
  <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Course Title</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Short Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <textarea  class="form-control" rows={5}></textarea>
    </div>
  </div>

  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Category</label>
    <div class="col-sm-10">
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Select a Category</option>
      <option value="1">March 2023</option>
      <option value="2">Feb 2023</option>
      <option value="3">Jan 2023</option>
    </select>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Level</label>
    <div class="col-sm-10">
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Beginner</option>
      <option value="1">Advanced</option>
      <option value="2">Intermediate</option>
    </select>
    </div>
  </div>
  <div class="row mb-3">
  <label for="colFormLabel" class="col-sm-2 col-form-label">Duration</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" id="inputEmail3"/><br/>

        <input class="form-check-input m-1" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Check if this course is top course
        </label><br/><br/>
        <input class="form-check-input m-1" type="checkbox" id="gridCheck2"/>
        <label class="form-check-label" for="gridCheck1">
          Check if this course is expire course
        </label>

    </div>

  </div>

  {!isFirstTab && (
                  <button
                    type="button"
                    className="btn btn-secondary float-start"
                    onClick={handlePrevTab}>
                    &lt; Prev
                  </button>
                  )}
                  {!isLastTab && (
              <button
                type="button"
                className="btn btn-secondary float-end"
                onClick={handleNextTab}
              >
                Next &gt;
              </button>
            )}
</form>
</div>
        </div>
        <div className={`tab-pane fade ${activeTab === 5 ? "show active" : ""}`}>
          <form>
            <div className="mb-3">
              <label htmlFor="input1" className="form-label">
                Input 1
              </label>
              <input type="text" className="form-control" id="input1" />
            </div>
            <div className="mb-3">
              <label htmlFor="input2" className="form-label">
                Input 2
              </label>
              <input type="text" className="form-control" id="input2" />
            </div>
            {!isFirstTab && (
                  <button
                    type="button"
                    className="btn btn-secondary float-start"
                    onClick={handlePrevTab}>
                    &lt; Prev
                  </button>
                  )}
                  {!isLastTab && (
              <button
                type="button"
                className="btn btn-secondary float-end"
                onClick={handleNextTab}
              >
                Next &gt;
              </button>
            )}
          </form>
        </div>
        <div className={`tab-pane fade ${activeTab === 6 ? "show active" : ""}`}>
          <form>
            <div className="mb-3">
              <label htmlFor="input1" className="form-label">
                Input 1
              </label>
              <input type="text" className="form-control" id="input1" />
            </div>
            <div className="mb-3">
              <label htmlFor="input2" className="form-label">
                Input 2
              </label>
              <input type="text" className="form-control" id="input2" />
            </div>
            {!isFirstTab && (
                  <button
                    type="button"
                    className="btn btn-secondary float-start"
                    onClick={handlePrevTab}>
                    &lt; Prev
                  </button>
                  )}
                  {!isLastTab && (
              <button
                type="button"
                className="btn btn-secondary float-end"
                onClick={handleNextTab}
              >
                Next &gt;
              </button>
            )}
          </form>
        </div>
        <div className={`tab-pane fade ${activeTab === 7 ? "show active" : ""}`}>
          <form>
            <div className="mb-3">
              <label htmlFor="input1" className="form-label">
                Input 1
              </label>
              <input type="text" className="form-control" id="input1" />
            </div>
            <div className="mb-3">
              <label htmlFor="input2" className="form-label">
                Input 2
              </label>
              <input type="text" className="form-control" id="input2" />
            </div>
            {!isFirstTab && (
                  <button
                    type="button"
                    className="btn btn-secondary float-start"
                    onClick={handlePrevTab}>
                    &lt; Prev
                  </button>
                  )}
                  {!isLastTab && (
              <button
                type="button"
                className="btn btn-secondary float-end"
                onClick={handleNextTab}
              >
                Next &gt;
              </button>
            )}
          </form>
        </div>

</div>
</div>

)

}
export default AddNewCourse;