import { useState } from "react";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <div className="container mt-4 card">
      <div className="row justify-content-center">
        <div className="col-md-2"><br/>
       
          <img className="rounded mb-2" src="https://wagonseducation.com/uploads/user_image/placeholder.png" width={100}/>
           <h5>Joh Doe</h5>
          
          <ul className="nav nav-tabs flex-column">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => handleTabClick("profile")}
              >
                Profile
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "account" ? "active" : ""}`}
                onClick={() => handleTabClick("account")}
              >
                Account
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "photo" ? "active" : ""}`}
                onClick={() => handleTabClick("photo")}
              >
                Photo
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          {activeTab === "profile" && (

            <form>
              <br/>
              <center>
                <h2>Profile</h2>
                <p>Add information about yourself to share on your profile.</p>
                </center>
              <div className="mb-3">
                
                <input type="text" placeholder="First Name" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <input placeholder="Last Name" type="text" className="form-control"  />
              </div>
              <div className="mb-3">
                <textarea placeholder="Biography" rows={4}  className="form-control"  />
              </div>
              <div className="mb-3">
                <input placeholder="Twitter Link" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <input placeholder="Facebook Link" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <input placeholder="LinkedIn Link" type="text" className="form-control" />
              </div>
              <center><button style={{backgroundColor:'#ec5252',color:'white'}} class="btn" >Save</button></center>
            </form>
           
          )}
          {activeTab === "account" && (
            <form>
              <br/>
              <center>
                <h2>Account</h2>
                <p>Edit your account settings.</p>
                </center>
                <div className="mb-3">
                <input placeholder="Email" type="email" className="form-control"  />
              </div>
              <div className="mb-3">
                <input placeholder="Password" type="text" className="form-control"  />
              </div>
              <div className="mb-3">
                <input placeholder="Enter new password" type="text" className="form-control"  />
              </div>
              <div className="mb-3">
                <input placeholder="Re-enter new password" type="text" className="form-control"  />
              </div>
              <center><button style={{backgroundColor:'#ec5252',color:'white'}} class="btn" >Save</button></center>
  
            </form>
          )}
          {activeTab === "photo" && (
            <form>
              <br/>
              <center>
                <h2>Photo</h2>
                <p>Update your photo.</p>
                </center>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label">
                  Upload Photo
                </label>
                <input type="file" className="form-control" id="photo" />
              </div>
              <center><button style={{backgroundColor:'#ec5252',color:'white'}} class="btn" >Save</button></center>
            </form>
          )}
        </div>
      </div>
      <br/>
    </div>
    <br/>
    </div>
   
  );
}

export default UserProfile;
