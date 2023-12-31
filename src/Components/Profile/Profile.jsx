import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import SidebarRight from "../SidebarRight/SidebarRight";
import "./Profile.css"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from "../navbar/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import trofe from "../../assets/MicrosoftTeams-image (7).png";
import AddIcon from '@mui/icons-material/Add';
import { CardActions } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));




function Profile() {


  const [value, setValue] = React.useState('1');
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [skill, setSkill] = useState("")
  const [experiences, setExperiences] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleAddSkillToggle = () => {
    setShowAddSkill(!showAddSkill);
  };
  const handleAddExperienceToggle = () => {
    setShowAddExperience(!showAddExperience);
  };
  const handleSkill = (e) => {
    setSkill(e.target.value)
  }


  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#ddccb03b', height: "100vh", color: "black" }}>
      <Navbar />
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', marginTop: '0vh' }}>
        <Grid item xs={12} md={8} lg={8}>
          <Item>
            <div>

              <CardMedia
                component="img"
                alt="Cover Image"
                image="https://cdn.wallpapersafari.com/76/89/dnAJUB.jpg"
                className="cover-img"
              />
              <div className="profile">
                <img
                  src="https://pics.craiyon.com/2023-05-30/eaab7f873e324b3e8f41f5aba2c2aeb2.webp"
                  alt="Profile"
                  className="profile-photo"

                />
              </div>
              <CardContent>
                <Typography variant="subtitle1" component="div" sx={{ display: 'flex', }}>
                  <span className="fw-bold username "> name</span>
                  {/* <button type="button" className="btn btn-secondary">Edit</button> */}
                </Typography>
                <Typography className="d-flex justify-align-left userinfo" variant="subtitle1" component="div">
                  Designation
                  {/* <button type="button" class="btn btn-secondary">Edit</button> */}
                </Typography>
              </CardContent>


            </div>
          </Item>
          <Card sx={{ marginTop: "10px" }}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Skills" value="1" />
                    <Tab label="Experience" value="2" />
                    <Tab label="Resume" value="3" />
                    <Tab label="About" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Card className="p-4">
                    <Typography variant="subtitle1" component="div">
                      <div className="d-flex justify-content-between">
                        <span className="fs-3 text-dark">Skills</span>
                        <span className="ms-auto fs-2"><AddIcon onClick={handleAddSkillToggle} /></span>
                      </div>
                      <span className="skill-btn ">HTML</span>
                    </Typography>

                  </Card>

                  {/* Add skills card start */}
                  {showAddSkill && (
                    <Card className="p-4 mt-2">

                      <div className="justify-content-left d-flex">
                        <span className="fs-3 text-dark">Add Skill*</span>
                      </div>
                      <div className="d-flex">
                        <div className="col-md-8">
                          <input type="text" className="form-control" value={skill} onChange={handleSkill} />
                        </div>
                        <div className="ms-auto">
                          <button type="button" className="btn btn-primary">
                          Save
                          </button>
                        </div>
                      </div>

                    </Card>
                  )}
                  {/* Add skills card end */}
                </TabPanel>
                <TabPanel value="2">
                  <Card className="p-4">
                    <Typography variant="subtitle1" component="div">
                      <div className="d-flex justify-content-between">
                        <span className="fs-3 text-dark">Experience</span>
                        <span className="ms-auto fs-2"><AddIcon onClick={handleAddExperienceToggle} /></span>
                      </div>

                    </Typography>
                    <hr />
                    <div className="d-flex justify-content-left">
                      <div className="">
                        <img
                          src="https://st2.depositphotos.com/1065578/7533/i/450/depositphotos_75333451-stock-photo-abstract-geometric-company-logo.jpg"
                          alt="Profile"
                          className="company-logo"

                        />
                      </div>
                      <span className="fw-bold mt-2">Data Engineer</span>
                    </div>

                  </Card>
                  {/* Add experiences card start */}
                  {showAddExperience && (
                    <Card className="p-4 mt-2">

                      <div className="justify-content-left d-flex">
                        <span className="fs-3 text-dark">Add Experience</span>
                        <div className="ms-auto">
                          <button type="button" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                     
                   
                      <div className="box">
        
          <div className="row d-flex justify-content-left   col">
            <div className="col-md-4 mt-3">
              <select
                type="text"
                className="form-select border"
                placeholder="Title"
              >
                <option disabled>Job Title*</option>
                </select>
            </div>
            
            <div className="col-md-4 mt-3">
              <input
                type="text"
                className="form-control border "
                placeholder="Profile Headline"
              />
            </div>
           
            <div className="col-md-4 mt-3">
              <input
                type="text"
                className="form-control border "
                placeholder="Employement Type"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-left   col">
            <div className="col-md-4 mt-3">
              <input
                type="text"
                className="form-control border"
                placeholder="Company Name"
              />
            </div>
            
            <div className="col-md-4 mt-3">
              <input
                type="text"
                className="form-control border"
                placeholder="Location"
              />
            </div>
           
            <div className="col-md-4 mt-3">
              <input
                type="text"
                className="form-control border "
                placeholder="Location Type"
              />
            </div>
          </div>
          <div className="row d-flex justify-content-left   col">
            <div className="col-md-4 mt-3">
              <input
                type="date"
                className="form-control border"
                placeholder="Start Date"
              />
            </div>
            
            <div className="col-md-4 mt-3">
              <input
                type="Date"
                className="form-control border"
                placeholder="End Date"
              />
            </div>
           
            <div className="col-md-4 mt-3">
              <input
                type="text"
                className="form-control border "
                placeholder="Industry"
              />
            </div>
           <div><textarea className="col-md-12 mt-3 py-1 " rows={5}></textarea></div>
            
            
          </div>
      </div>


                    </Card>
                  )}
                  {/* Add experiences card end */}
                </TabPanel>
                <TabPanel value="3">

                </TabPanel>
              </TabContext>
            </Box>
          </Card>





        </Grid>


        <Grid item xs={12} md={4} lg={3} >
          <Item>
            <div>

              <div className="trofie">
                <img
                  src={trofe}
                  alt="Profile"
                  className="trofie"

                />


              </div>
              <CardContent>
                <Typography variant="subtitle1" component="div">
                  Upgrade to Pro
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                </Typography>


              </CardContent>


            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>


  );
}

export default Profile;
