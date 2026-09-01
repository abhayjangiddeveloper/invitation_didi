"use client";

import { CARD_INFO } from "@/utils/constant";
import moment from "moment";
import React from "react";

export default function EventsSection() {
  return (
    <section className="venue-section" id="eventsSection">
      <div className="section-tagline">Program Details</div>
      <h2 className="section-main-heading">Events &amp; Venues</h2>

      <div className="event-cards-container">
        {/* Card 1: Flower Carnival */}
        <div className="event-card">
          <div className="event-badge light"> 🌷 Flower Carnival</div>

          <img
            src="/assets/flower.png"
            alt="Masjid-e-Ilahi"
            className="event-image"
          />

          <h3 className="event-date-text">
            {moment(CARD_INFO.flowerCarnivalDate).format("dddd, DD MMMM YYYY")}
          </h3>
          <p className="event-time-text">
            ⏰ After {CARD_INFO?.flowerCarnivalTime}
          </p>
          <p className="event-venue-name">📍 {CARD_INFO?.resortLocation}</p>
          <p className="event-address">{CARD_INFO?.resortLandmark}</p>
        </div>

        {/* Card 2: Barat */}
        {/* <div className="event-card">
          <div className="event-badge light">🎠 Barat Departure</div>

          <img
            src="/assets/bhai.jpeg"
            alt="Prince Lawns Function Hall"
            className="event-image"
          />
          <h3 className="event-date-text">
            {" "}
            {moment(CARD_INFO.baratDepartureDate).format("dddd, DD MMMM YYYY")}
          </h3>
          <p className="event-time-text">⏰ {CARD_INFO?.baratDepartureTime}</p>
          <p className="event-address">
            Note: Barat goes to Janab {CARD_INFO.brideFather} Bagor (Bhilwara)
          </p>
        </div> */}

        {/* Card 3: Nikah */}
        {/* <div className="event-card">
          <div className="event-badge light">🕌 Nikah</div>

          <img
            src="/assets/masjid.png"
            alt="Prince Lawns Function Hall"
            className="event-image"
          />

          <h3 className="event-date-text">
            {moment(CARD_INFO.baratDepartureDate).format("dddd, DD MMMM YYYY")}
          </h3>
          <p className="event-time-text">⏰ 9:00 PM</p>
          <p className="event-venue-name">📍 At Bagor</p>
        </div> */}

        {/* Card 4: Mayra */}
        <div className="event-card">
          <div className="event-badge light">👗 Mayra</div>
          <h3 className="event-date-text">
            {moment(CARD_INFO.mayraDate).format("dddd, DD MMMM YYYY")}
          </h3>
          <p className="event-time-text">⏰ {CARD_INFO?.mayraTime}</p>
          <p className="event-venue-name">📍 {CARD_INFO?.resortLocation}</p>
          <p className="event-address">{CARD_INFO?.resortLandmark}</p>
        </div>

        {/* Card 5: Reception & Dinner */}
        <div className="event-card">
          <div className="event-badge light">🕌 Nikah</div>

          <img
            src="/assets/venue.png"
            alt="Prince Lawns Function Hall"
            className="event-image"
          />
          <h3 className="event-date-text">
            {moment(CARD_INFO.receptionAndDinnerDate).format(
              "dddd, DD MMMM YYYY",
            )}
          </h3>
          <p className="event-time-text">
            ⏰ {CARD_INFO?.receptionAndDinnerTime}
          </p>
          <p className="event-venue-name">📍 {CARD_INFO?.resortLocation}</p>
          <p className="event-address">{CARD_INFO?.resortLandmark}</p>
          <a
            href="https://maps.app.goo.gl/gFkWoQ5HFfANq7FG6"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn-cream"
          >
            <span>📍 View Location on Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
