import React from 'react';

const Resume = () => {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto" id="resume">
      <h2
        className="text-5xl mb-8 text-teal-700 text-center"
        style={{ fontFamily: "'Monsieur La Doulaise', cursive" }}
      >
        Resume
      </h2>

      {/* Summary */}
      <div className="mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
        <h3 className="text-2xl font-semibold mb-2 text-teal-700">Summary</h3>
        <p className="text-teal-900">
          Motivated and multi-talented student with a passion for the performing arts, leadership, and service. Proven excellence in theater, athletics, and community engagement. Pursuing opportunities in healthcare, creative storytelling, and service-driven leadership.
        </p>
      </div>

      {/* Experience */}
      <div className="mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
        <h3 className="text-2xl font-semibold mb-4 text-teal-700">Experience & Activities</h3>

        {/* Theater & Performance */}
        <div className="mb-4">
          <h4 className="text-xl font-medium text-teal-700">Theater & Performance</h4>
          <ul className="list-disc list-inside text-teal-900">
            <li><strong>Liesl</strong>, <em>The Sound of Music</em> – Outback Productions (2022, Self-Directed)</li>
            <li><strong>Nancy</strong>, <em>Oliver Jr.</em> – Courtyard Theatre (2023, Voted Best Actress)</li>
            <li><strong>Jessica Crenshaw</strong>, <em>Curtains</em> – Courtyard Theatre (Dance & Tap)</li>
            <li>Cast Member – <em>Anastasia</em></li>
            <li>Videographer – <em>Oklahoma</em> school play</li>
            <li>Tulsa Performing Arts Youth Choir (2023–2024)</li>
            <li>National Anthem – Regent Volleyball Game</li>
            <li>Choir – 9th Grade (Superior District Rating)</li>
            <li>Celebration of the Arts Concert – Regent Choir</li>
            <li>Orbit Arts Festival Performer (2024)</li>
            <li>Lead role – VBS Play (2 nights)</li>
            <li>Church Youth Group Singer</li>
          </ul>
        </div>

        {/* Leadership */}
        <div className="mb-4">
          <h4 className="text-xl font-medium text-teal-700">Leadership & Awards</h4>
          <ul className="list-disc list-inside text-teal-900">
            <li>STUCO: Sophomore Rep, Junior & Senior Officer (R-Crew Director)</li>
            <li>Winter Ball 2023 – Ball Queen (Peer + Parent Voted)</li>
            <li>TeenPact Leadership – Committee Chair (2023)</li>
            <li>Worldview Academy Camp</li>
            <li>STUCO Basic Camp – Vice President (2024)</li>
            <li>National Beta Club Member (from Oct 2023)</li>
            <li>Led roadway cleanup & school supply drive</li>
          </ul>
        </div>

        {/* Service */}
        <div className="mb-4">
          <h4 className="text-xl font-medium text-teal-700">Service & Volunteering</h4>
          <ul className="list-disc list-inside text-teal-900">
            <li>Mercy House Global Volunteer (HQ + Events)</li>
            <li>NightLight Tulsa (2023)</li>
            <li>Jenks CarePoint (Nov 2023)</li>
            <li>Mission Arlington (Spring Break 2024 & 2025)</li>
            <li>Samaritan’s Purse Volunteer (2024)</li>
            <li>Babysitting (2022–Present)</li>
            <li>Club Scrubs Member</li>
          </ul>
        </div>

        {/* Health & Education */}
        <div className="mb-4">
          <h4 className="text-xl font-medium text-teal-700">Health & Education</h4>
          <ul className="list-disc list-inside text-teal-900">
            <li>Regent Health Science Club</li>
            <li>OCCC CHAMPS Camp – CPR & Stop the Bleed Certified (2024)</li>
            <li>Operation Orange OSU (2025)</li>
          </ul>
        </div>
      </div>

      {/* Athletics */}
      <div className="mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
        <h3 className="text-2xl font-semibold mb-2 text-teal-700">Athletics & Achievements</h3>
        <ul className="list-disc list-inside text-teal-900">
          <li>Track: Qualified for State (100m hurdles, 300m hurdles, 4x400, 4x800 relays)</li>
          <li>Tulsa World Track Honorable Mention</li>
          <li>XC Team: 3rd place in 4A (2023), Runner-Up (2024)</li>
          <li>Overcame injury: Freiburg disease + fracture, returned to podium</li>
          <li>Grand Canyon Rim2Rim – Completed in 1 day</li>
        </ul>
      </div>

      {/* Work */}
      <div className="mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
        <h3 className="text-2xl font-semibold mb-2 text-teal-700">Work Experience</h3>
        <p className="text-teal-900"><strong>Josh’s Sno Shack</strong> – Employee (Mar 2023–Present)</p>
      </div>

      {/* Education */}
      <div style={{ fontFamily: "'Playfair Display', serif" }}>
        <h3 className="text-2xl font-semibold mb-2 text-teal-700">Education</h3>
        <p className="text-teal-900">
          Regent Preparatory School, Tulsa, OK<br />
          Expected Graduation: 2025
        </p>
      </div>
    </section>
  );
};

export default Resume;
