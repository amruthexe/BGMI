import React from 'react';
import './styles.css'; // Import the CSS file

const TeamList = () => {
  const teams = [
    {
      teamName: "LEGION",
      players: [
        "LEGION",
        "rathnesx",
        "CHAITANYA",
        "SHAIKMANNU"
      ],
    },
    {
      teamName: "Silent Reapers",
      players: [
        "SRxHERÒop",
        "TNVRīISĪLIVE",
        "SCOUTISĪLIVE",
        "SRxKRAZYop"
      ],
    },
    {
      teamName: "GANGSTERS",
      players: [
        "GS๛『SPIDEY』",
        "GS๛『VIRAT』",
        "GS๛『LÜFFY』",
        "ＩtＡcＨiシ"
      ],
    },
    {
      teamName: "THE FOUR RUSHERS",
      players: [
        "UDAY",
        "PURNA",
        "MUSTAFFA",
        "VISWAS"
      ],
    },
    {
      teamName: "Team Elite",
      players: [
        "Pavan",
        "Sai Teja",
        "Adi Vishnu",
        "Anudeep"
      ],
    },
    {
      teamName: "Zero Resistance",
      players: [
        "XC우SPIRIT",
        "VIPERīOp",
        "ExoticOpū",
        "GANESHxFTW"
      ],
    },
    {
      teamName: "TG",
      players: [
        "Muddu Krishna & TGÏÏÏGAMER",
        "Nithin",
        "Manudeep",
        "Jaya Krishna"
      ],
    },
    {
      teamName: "Tribe Of Curses",
      players: [
        "ToC・JAXIN",
        "ToC・MAXIN",
        "BZR丶DEVÍL",
        "帝ATHÉNA帝"
      ],
    },
    {
      teamName: "TEAM Arise",
      players: [
        "Mani",
        "Seetharam",
        "Charan Tej",
        "Abhilash"
      ],
    },
    {
      teamName: "Tredo",
      players: [
        "Lucifer",
        "Durga",
        "Rk",
        "Ramana"
      ],
    }
  ];
  
  return (
    <section className="min-h-screen bg-black text-orange-600 py-10 px-5 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto bg-transparent p-6">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
          Teams and Players Enrolled
        </h2>

        {/* List of Teams and Players */}
        <div className="space-y-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white p-6 rounded-xl shadow-xl transition-all duration-300 relative group"
            >
              <h3 className="text-2xl font-bold text-center mb-4">{team.teamName}</h3>
              <ul className="space-y-2">
                {team.players.map((player, idx) => (
                  <li
                    key={idx}
                    className="text-lg text-center hover:text-orange-400 transition duration-200"
                  >
                    {player}
                  </li>
                ))}
              </ul>

              {/* Continuous Moving Light Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-moving-light"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );


};

export default TeamList;
