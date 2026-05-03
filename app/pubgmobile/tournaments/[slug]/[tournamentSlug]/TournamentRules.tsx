import React from 'react';

export default function TournamentRules() {
  return (
    <div style={{ 
      padding: '2rem', 
      background: 'rgba(15, 23, 42, 0.2)', 
      borderRadius: '16px', 
      border: '1px solid rgba(255,255,255,0.05)',
      maxHeight: '600px',
      overflowY: 'auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
        <h2 style={{ color: '#FFF', margin: '0 0 0.5rem 0', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          2026 PUBG MOBILE NATIONAL CHAMPIONSHIP PAKISTAN - SPRING RULEBOOK
        </h2>
        <p style={{ color: '#9CA3AF', margin: 0 }}>(ver 1.0.2, February 09, 2026)</p>
      </div>

      <div className="rules-content" style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: '1.7' }}>
        <style dangerouslySetInnerHTML={{__html: `
          .rules-content h3 { color: #22C55E; font-size: 1.25rem; margin-top: 2.5rem; margin-bottom: 1rem; border-bottom: 1px solid rgba(34, 197, 94, 0.2); padding-bottom: 0.5rem; font-weight: 800; text-transform: uppercase; }
          .rules-content h4 { color: #FACC15; font-size: 1.05rem; margin-top: 1.5rem; margin-bottom: 0.75rem; font-weight: 700; }
          .rules-content h5 { color: #E5E7EB; font-size: 0.95rem; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: 700; }
          .rules-content p { margin-bottom: 1rem; }
          .rules-content ul { padding-left: 1.5rem; margin-bottom: 1rem; list-style-type: disc; }
          .rules-content li { margin-bottom: 0.5rem; }
          .rules-content table { width: 100%; max-width: 400px; border-collapse: collapse; margin-top: 1rem; margin-bottom: 1.5rem; }
          .rules-content th, .rules-content td { border: 1px solid rgba(255,255,255,0.1); padding: 0.75rem; text-align: center; }
          .rules-content th { background: rgba(250, 204, 21, 0.1); color: #FACC15; font-weight: 700; }
          .rules-content td { color: #E5E7EB; }
        `}} />
        
        <h3>1. Introduction</h3>
        <h4>1.1 Background and Purpose</h4>
        <p>The 2026 PUBG MOBILE National Championship Pakistan Spring (2026 PMNC PK - Spring) is a premier amateur esports competition designed to provide a structured competitive pathway for emerging teams in Pakistan. As a qualifier for the 2026 PMGO S1 SOUTH ASIA FINALS, the tournament serves as a stepping stone for amateur teams aiming to enter the professional PUBG MOBILE esports ecosystem. With a tiered competition structure, teams will advance through multiple rounds, ensuring fair progression based on performance.</p>

        <h4>1.2 Tournament Overview</h4>
        <p>The 2026 PUBG MOBILE National Championship Pakistan Spring (2026 PMNC PK - Spring) is a premier esports tournament designed to identify and nurture emerging PUBG MOBILE talent across the Pakistan region. This championship offers a structured pathway for teams from Pakistan to progress from amateur status to the professional esports scene.</p>
        
        <h4>1.3 Definitions and Terminology</h4>
        <ul>
          <li><strong>Tournament Organizer:</strong> The official entity overseeing and coordinating the tournament.</li>
          <li><strong>Tournament Vendor:</strong> The appointed entity responsible for managing and enforcing the tournament rules.</li>
          <li><strong>Participant:</strong> Any player or team registered to compete in the 2026 PMNC PK Spring.</li>
          <li><strong>Grand Finals:</strong> The concluding stage where the best Pakistan teams compete for the championship title and seeding into professional leagues.</li>
          <li><strong>Match Lobby:</strong> A custom in-game room where official tournament matches are conducted.</li>
        </ul>

        <h3>2. General Terms</h3>
        <h4>2.1 Eligibility and Acceptance</h4>
        <p>All participants in the 2026 PMNC PK Spring must meet the eligibility criteria outlined in this rulebook. By registering for and participating in the tournament, each participant acknowledges and agrees to abide by all rules and regulations set forth by the tournament organizers. Failure to comply with any of the rules may result in disqualification or other disciplinary actions.</p>
        <h5>2.1.1 Age Requirement</h5>
        <ul>
          <li>Participants must be at least 16 years of age by the start of the tournament.</li>
          <li>Tournament officials may request proof of age at any time to verify eligibility.</li>
          <li>The tournament organizer holds the authority to disqualify any team if they fail to meet the eligibility criteria or provide false information.</li>
        </ul>
        <h5>2.1.2 Residency Requirement</h5>
        <p>All Team members must be legal residents of an eligible country within the Pakistan region.</p>
        <h5>2.1.3 Team Composition</h5>
        <ul>
          <li>Teams must consist of a minimum of four (4) players and may include one (1) or two (2) substitutes.</li>
          <li>All players, including substitutes, must be registered prior to the start of the tournament.</li>
          <li>No roster changes or substitutions are permitted after the registration period has closed.</li>
        </ul>
        <h5>2.1.4 Player Verification</h5>
        <ul>
          <li>All players must provide valid identification and any other documentation requested by tournament officials to verify eligibility.</li>
          <li>Failure to provide requested verification documents may result in disqualification.</li>
        </ul>

        <h4>2.2 Compliance with Rules</h4>
        <p>All participants and teams are required to comply with the rules and regulations set forth in this rulebook, as well as any additional instructions or directives issued by tournament officials. Compliance with these rules ensures the integrity and fairness of the competition.</p>
        <h5>2.2.1 Rule Acknowledgment</h5>
        <ul>
          <li>By participating in the tournament, all players and teams acknowledge that they have read, understood, and agree to abide by the rules.</li>
          <li>Ignorance of the rules will not be accepted as a defense for any violation.</li>
        </ul>
        <h5>2.2.2 Rule Updates</h5>
        <ul>
          <li>The tournament organizers reserve the right to modify or update the rules at any time.</li>
          <li>Any changes to the rules will be communicated to participants promptly through official channels.</li>
        </ul>
        <h5>2.2.3 Disciplinary Action</h5>
        <p>Any violation of the rules may result in penalties, including but not limited to: Warnings, Point deductions, Match forfeiture, Disqualification from the tournament, Suspension or bans from future tournaments.</p>

        <h4>2.3 Tournament Changes</h4>
        <p>The organizers of the 2026 PMNC PK Spring reserve the right to modify the tournament structure, schedule, format, or any other aspect of the competition as necessary to ensure a fair and competitive environment. Changes may be made to accommodate unforeseen circumstances, ensure participant safety, or improve the overall quality of the event.</p>
        <h5>2.3.1 Schedule Adjustments</h5>
        <ul>
          <li>The organizers may adjust match schedules, including dates and times, to address logistical concerns or conflicts.</li>
          <li>In case of technical issues or force majeure, rescheduling may be required.</li>
        </ul>
        <h5>2.3.2 Format Changes</h5>
        <p>The tournament format may be altered to maintain competitive balance or address issues that arise during the competition. Any changes will be implemented to ensure fairness for all participants.</p>
        <h5>2.3.3 Communication of Changes</h5>
        <p>All changes to the tournament structure or schedule will be communicated to participants as soon as possible through official channels such as: Tournament website, Email notifications, Designated communication platforms (e.g., Discord).</p>

        <h4>2.4 Privacy and Data Protection</h4>
        <p>The organizers of the 2026 PMNC PK Spring are committed to protecting the privacy and personal data of all participants. By registering for the tournament, participants consent to the collection, use, and disclosure of their personal information in accordance with applicable privacy laws and the terms outlined in this rulebook.</p>
        <h5>2.4.1 Data Collection</h5>
        <p>Personal information, including but not limited to names, contact details, and identification documents, will be collected for the purpose of verifying eligibility and managing tournament operations.</p>
        <h5>2.4.2 Data Use</h5>
        <ul>
          <li>The collected data will be used solely for tournament administration and will not be shared with third parties without the participant's consent, except as required by law.</li>
          <li>Gameplay footage, match results, and player statistics may be used for promotional or broadcast purposes.</li>
        </ul>
        <h5>2.4.3 Data Security</h5>
        <p>The organizers will implement reasonable security measures to protect the personal data of participants from unauthorized access, disclosure, or misuse. Only authorized tournament staff will have access to personal data.</p>
        <h5>2.4.4 Participant Rights</h5>
        <p>Participants have the right to access, correct, or delete their personal data held by the tournament organizers. Requests for data access or modification should be directed to the tournament's official contact channels.</p>

        <h3>3. Tournament Structure</h3>
        <p>All matches will follow the official tournament schedule unless communicated otherwise by the tournament organizers. Teams must be prepared and available for all scheduled matches.</p>
        <p>The 2026 PMNC Pakistan - Spring serves as the gateway to the 2026 PMGO S1 SOUTH ASIA FINALS, a pro-level tournament featuring the top teams from South Asia and Pakistan. Teams that succeed in the 2026 PMGO S1 SOUTH ASIA FINALS can advance to 2026 PMGO - Main Event, offering a chance to compete on the world stage.</p>

        <h3>4. Team and Player Eligibility</h3>
        <h4>4.1 Eligibility Criteria</h4>
        <p>To ensure a fair and competitive environment, all teams and players must meet the following eligibility criteria to participate in the 2026 PUBG MOBILE National Championship - Pakistan.</p>
        <h5>4.1.1 Eligible Country List</h5>
        <p>The team captain must be a citizen of one of the following eligible countries: Pakistan.</p>
        <h5>4.1.2 Residency Requirement</h5>
        <ul>
          <li>More than 50% of the players on a team’s roster must be citizens of the team's home country.</li>
          <li>More than 50% of the players in any tournament match must be citizens of the team’s home country.</li>
        </ul>
        <h5>4.1.3 Age Requirement</h5>
        <ul>
          <li>Participants must be at least 16 years of age by the start date of the tournament (Feb 05, 2026).</li>
          <li>Players under the age of 18 must provide parental or guardian consent to participate.</li>
          <li>Consent forms must be submitted during registration.</li>
          <li>Tournament officials may request proof of age (Government-issued ID or Passport) at any time.</li>
        </ul>
        <h5>4.1.4 Account Requirements</h5>
        <p>All players must have a valid PUBG MOBILE account in good standing. Players with a history of bans or suspensions related to cheating, hacking, or misconduct will be disqualified.</p>
        <h5>4.1.5 Professional Status & Seeding Eligibility</h5>
        <p>The tournament is open to all teams, including professional teams, but seeding slots for 2026 PMGO S1 SOUTH ASIA FINALS are reserved for non-invited teams.</p>

        <h4>4.2 Team Registration Process</h4>
        <p>Teams must follow the official registration process to be eligible to compete in the 2026 PMNC PK Spring.</p>
        <h5>4.2.1 Team Registration Guidelines</h5>
        <p>Teams must complete their registration through In-game PUBG MOBILE Tournament Platform.</p>
        <h5>4.2.2 Required Information for Registration</h5>
        <ul>
          <li>Team Name (Must comply with PUBG MOBILE naming policies).</li>
          <li>Captain’s Contact Information (Name, Email, Discord, or Phone).</li>
          <li>Player Information: PUBG MOBILE Username, PUBG MOBILE Character ID, Country of Residency, Date of Birth, Proof of Residency (if required).</li>
          <li>Parental Consent Form (for players under 18).</li>
          <li>Substitute Player (Optional): Teams may register two substitutes during the registration phase.</li>
        </ul>
        <h5>4.2.3 Registration Confirmation</h5>
        <p>Once a team has completed the registration process, the team captain will receive a confirmation email. Incomplete or incorrect registrations will be rejected.</p>
        <h5>4.2.4 Late Registrations</h5>
        <p>No late registrations will be accepted under any circumstances.</p>

        <h4>4.3 Player Age Requirements</h4>
        <ul>
          <li><strong>Minimum Age Requirement:</strong> All players must be at least 16 years old by the start of the tournament.</li>
          <li><strong>Age Verification:</strong> Tournament officials may request proof of age (such as a government-issued ID or student card or National Passport) at any time.</li>
          <li><strong>Failure to Verify Age:</strong> Any player unable to verify their age upon request will be immediately disqualified.</li>
        </ul>

        <h4>4.4 Team Composition Rules</h4>
        <h5>4.4.1 Official Team Size</h5>
        <p>Each team must consist of a minimum of four (4) players and a maximum of six (6) players (four active players and one/two substitutes). Teams must designate one player as the team captain, who will be responsible for all communication with tournament officials.</p>
        <ul>
          <li><strong>Team of 4:</strong> 4 players from Eligible Country (Pakistan).</li>
          <li><strong>Team of 5:</strong> 5 players from Eligible Country (Pakistan), OR 4 Players from Eligible Country (Pakistan) + 1 Foreign player holding Nationality of Eligible Country.</li>
          <li><strong>Team of 6:</strong> 6 players from Eligible Country (Pakistan), OR 4 Players from Pakistan + 2 Foreign players holding Nationality, OR 5 Players from Pakistan + 1 Foreign player holding Nationality.</li>
        </ul>
        <h5>4.4.2 Team Captain & Responsibilities</h5>
        <p>The Team Captain is responsible for communicating with tournament officials, ensuring all team members follow tournament schedules and rules, and submitting results or disputes if necessary.</p>
        <h5>4.4.3 Roster Lock & Substitutions</h5>
        <p>No roster changes are allowed after the registration period ends. If a player becomes unavailable mid-tournament, the team must continue with the remaining roster. If a team drops below four (4) active players, they will be disqualified from the tournament.</p>

        <h4>4.5 Player Name and Team Name Regulations</h4>
        <h5>4.5.1 Player Nickname Format</h5>
        <p>Starting from the Online Qualifiers, each player's nickname must include their Team Name (or an abbreviation) followed by their player name. Format: "TeamNamePlayerName". Example: "Asi8CRYPTO". The Player Tag must be finalized during registration.</p>
        <h5>4.5.2 Prohibited Player Names and Team Names</h5>
        <ul>
          <li>Cannot include any sponsor name, product name, or description.</li>
          <li>Cannot include words that are purely commercial.</li>
          <li>Cannot contain profanity or any offensive, discriminatory, or inappropriate words in any language.</li>
          <li>Cannot include special characters or symbols.</li>
        </ul>
        <h5>4.5.3 Liability & Name Rights</h5>
        <p>Players assume full responsibility for the legal right to use a corporate name or brand-related reference. The Tournament Organizers reserve the right to reject or request a change to any name.</p>

        <h4>4.6 Prohibited Devices</h4>
        <ul>
          <li>Players may only use iOS and Android smartphones. Tablets, iPads, and emulators are prohibited. "Trigger Clickers" or smartphones with built-in triggers are not allowed.</li>
          <li>Only original apps developed by Tencent Games installed thru Apple apps store or Google play store are allowed.</li>
          <li>Any participant caught using third-party apps will be banned for the whole squad.</li>
          <li>No additional accessories EXCEPT for USB cables, power banks, adapters, and headphones are allowed.</li>
          <li>Rooted / Bootloader Unlocked Phones (Android) and Jailbroken Phones (iPhone) are strictly prohibited.</li>
        </ul>

        <h3>5. Match Rules and Regulations</h3>
        <h4>5.1 Match Settings</h4>
        <ul>
          <li><strong>Mode:</strong> All matches will be played in Third Person Perspective (TPP) mode.</li>
          <li><strong>Sound Visualization:</strong> Disabled</li>
          <li><strong>Aim Assist:</strong> Disabled</li>
          <li><strong>Red Zone:</strong> Disabled</li>
          <li><strong>Flare Guns:</strong> Disabled</li>
          <li><strong>Vague Information:</strong> Enabled</li>
          <li><strong>ALL Weapons:</strong> x2</li>
          <li><strong>Scopes & Magazines:</strong> x2</li>
        </ul>

        <h4>5.2 Map Selection and Rotation</h4>
        <ul>
          <li><strong>Map Pool:</strong> Erangel, Miramar, Rondo</li>
          <li><strong>Map Rotation:</strong> Announced prior to each phase. Teams should be prepared to compete on any of the maps.</li>
        </ul>

        <h4>5.3 Victory Conditions</h4>
        <p>Victory in each match is determined by a combination of survival (Match Winner) and performance (Scoring based on placement and kills).</p>

        <h4>5.4 Point System</h4>
        <table>
          <thead>
            <tr><th>RANK</th><th>POINT</th></tr>
          </thead>
          <tbody>
            <tr><td>1st</td><td>10</td></tr>
            <tr><td>2nd</td><td>6</td></tr>
            <tr><td>3rd</td><td>5</td></tr>
            <tr><td>4th</td><td>4</td></tr>
            <tr><td>5th</td><td>3</td></tr>
            <tr><td>6th</td><td>2</td></tr>
            <tr><td>7th</td><td>1</td></tr>
            <tr><td>8th</td><td>1</td></tr>
            <tr><td>9th - 16th</td><td>0</td></tr>
          </tbody>
        </table>
        <p><strong>1 ELIMINATION = 1 POINT</strong></p>

        <h4>5.5 Tiebreaker Rules</h4>
        <p>In the event of a tie, the following tiebreakers are used in order of priority:</p>
        <ol>
          <li>Total Number of First-Place Finishes (Chicken Dinners).</li>
          <li>Total Accumulated Placement Points.</li>
          <li>Total Accumulated Kills.</li>
          <li>Placement in the Most Recent Match.</li>
        </ol>

        <h4>5.6 Supported Devices</h4>
        <p>Players must use smartphones running Android or iOS platforms. PCs, consoles, laptops, tablets, and emulators are prohibited.</p>

        <h3>6. Code of Conduct</h3>
        <h4>6.1 General Conduct</h4>
        <p>Respect, Integrity, Professionalism, and Compliance with rules are mandatory for all participants.</p>
        <h4>6.2 Cheating and Exploitation</h4>
        <p>Use of unauthorized third-party programs, exploiting bugs, collusion, ringing (playing under another's account), providing false information, match-fixing, and using rooted devices are strictly prohibited and will lead to severe penalties.</p>
        <h4>6.3 Sportsmanship</h4>
        <p>All players must uphold fair play, good sportsmanship, professional communication, and respect for opponents.</p>
        <h4>6.4 Media Obligations</h4>
        <p>Participants may be required to partake in interviews and promotional activities, and must maintain responsible social media conduct.</p>
        <h4>6.5 Penalties for Rule Violations</h4>
        <p>Penalties include Warnings, Point Deductions, Match Forfeiture, Disqualification, and Banning from Future Events. An appeals process is available.</p>
        <h4>6.6 Reporting Misconduct</h4>
        <p>Participants are encouraged to report misconduct confidentially. Whistleblowers will be protected, and reports will be thoroughly investigated.</p>

        <h3>7. Disciplinary Actions</h3>
        <h4>7.1 Investigation Process</h4>
        <p>Includes Initial Review, Evidence Collection, Confidentiality assurance, and Final Decision Making by tournament officials.</p>
        <h4>7.2 Sanctions and Appeals</h4>
        <p>Sanctions range from warnings to bans. Appeals must be submitted in writing within 24 hours of receiving the decision.</p>
        <h4>7.3 Repeated Offences</h4>
        <p>Repeated offences result in escalated penalties, cumulative tracking across the tournament, and potential permanent bans.</p>

        <h3>8. Match Process</h3>
        <h4>8.1 Match Procedures</h4>
        <p>Matches follow official schedules. Teams must join lobbies on time. Matches start promptly, and all gameplay rules must be followed.</p>
        <h4>8.2 Pre-Match Setup</h4>
        <p>Players must ensure technical readiness, perform checks, confirm readiness, and finalize any substitutions before the match starts.</p>
        <h4>8.3 Post-Match Reporting</h4>
        <p>Results are automatically recorded but must be verified by captains. Additional stats may be required. Match reviews and feedback are encouraged.</p>
        <h4>8.4 Technical Issues and Pauses</h4>
        <p>Players must reconnect quickly if disconnected. Pauses (max 5 mins) can be requested for severe issues affecting multiple players. Rematches are only considered for catastrophic server failures.</p>

        <h3>9. Use of Names and Likenesses</h3>
        <p>Participants grant organizers rights to use their names, likenesses, and footage for promotional purposes. Organizers retain exclusive ownership of all broadcast rights.</p>

        <h3>10. Communication</h3>
        <p>Official channels (Email/Discord) must be monitored. Official requests must meet deadlines. Failure to respond may result in penalties.</p>
        <h4>10.4 Payment Policy</h4>
        <p>Prize money is distributed within 75 days post-tournament if proper documentation is provided within the initial deadline. Players forfeit prizes if documentation is not submitted within 6 months.</p>
        <h4>10.5 Dispute Resolution</h4>
        <p>Disputes are reviewed by officials. Unresolved issues may go to arbitration, governed by relevant jurisdictional laws.</p>

        <h3>11. Interpretation of Rules</h3>
        <p>Tournament officials hold the sole authority to interpret rules. Decisions are final. The official language is English.</p>

        <h3>12. Appendices</h3>
        <h4>12.1 Glossary of Terms</h4>
        <p>Key terms include Tournament Organizer, Team Captain, Match, Prize Pool, Seeding Slot, Broadcast Rights, Technical Pause, and Dispute Resolution.</p>
        <h4>12.2 Competition Structure</h4>
        <p>(Refer to Section 1.1 and official tournament announcements).</p>
        <h4>12.3 Team Member Certificate and Acceptance Form</h4>
        <p>By participating, all members agree to follow the Competition Rules. Failure to sign means exclusion from official competitions.</p>
        <h4>12.4 Parent or Guardian Consent Form</h4>
        <p>Required for players under 18.</p>

      </div>
    </div>
  );
}
