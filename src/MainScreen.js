import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";

function MainScreen() {
  return (
    <div>
      <Carousel />

      {/* Section Divider */}
      <div class="container">
        <hr />
        <div class="my-5 text-center">
          <h1>Upcoming Sessions</h1>
        </div>
      </div>

      <div
        id="card-section"
        className="d-flex my-4 justify-content-between"
        style={{ minHeight: "calc(100vh - 462px)" }}
      >
        {/* TODO: Connect to backend!! Display session cards from DB */}
        <div class="container">
          <div class="row">
            <div class="col">
              <Card
                imageUrl="./machine.jpg"
                title="Clustering Techniques"
                courseID="CMP466"
                courseName="Machine Learning"
                time="12pm - 1pm"
                tutorName="Jane Doe"
                buttonLabel="Book"
              />
            </div>

            <div class="col">
              <Card
                imageUrl="./binary.jpg"
                title="Stacks and Queues"
                courseID="CMP305"
                courseName="Data Structures"
                time="10am - 11am"
                tutorName="John Smith"
                buttonLabel="Book"
              />
            </div>

            <div class="col">
              <Card
                imageUrl="./rfidedit.jpg"
                title="RFID Tags"
                courseID="COE410"
                courseName="Embedded Systems"
                time="1pm - 2pm"
                tutorName="Jill Jack"
                buttonLabel="Book"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;