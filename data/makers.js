let makes = [
  {
    name: "Audi",
    year: 2018,
    models: [
      {
        model: "R8",
        displacement: "5.2",
        engine: "V10",
        drivetrain: "AWD",
        horsepower: 610,
        torque: 430,
        price: 175000
      },
      {
        model: "RS7",
        displacement: "4",
        engine: "V8",
        drivetrain: "AWD",
        horsepower: 560,
        torque: 516,
        price: 125000
      }
    ]
  },
  {
    name: "Bentley",
    year: 2010,
    models: [
      {
        model: "Continental GT",
        displacement: "6",
        engine: "W12",
        drivetrain: "AWD",
        horsepower: 582,
        torque: 750,
        price: 220000
      },
      {
        model: "Bentayga",
        displacement: "6",
        engine: "V12",
        drivetrain: "AWD",
        horsepower: 600,
        torque: 664,
        price: 165000
      }
    ]
  },
  {
    name: "BMW",
    year: 2011,
    models: [
      {
        model: "M3",
        displacement: "3",
        engine: "I6",
        drivetrain: "RWD",
        horsepower: 453,
        torque: 443,
        price: 76000
      },
      {
        model: "M5",
        displacement: "4.4",
        engine: "V8",
        drivetrain: "AWD",
        horsepower: 600,
        torque: 553,
        price: 120000
      }
    ]
  },
  {
    name: "Bugatti",
    year: 2012,
    models: [
      {
        model: "Veyron",
        displacement: "8",
        engine: "W16",
        drivetrain: "AWD",
        horsepower: 1200,
        torque: 1106,
        price: 1600000
      },
      {
        model: "Chiron",
        displacement: "8",
        engine: "W16",
        drivetrain: "AWD",
        horsepower: 1500,
        torque: 1180,
        price: 2700000
      }
    ]
  },
  {
    name: 'Cadillac',
    year: 2010,
    models: [
      {
        model: "escalade",
        displacement: "6.2",
        engine: "v8",
        drivetrain: "RWD",
        horsepower: 403,
        torque: 417,
        price: 65000
      },
      {
        model: "CTS",
        displacement: "3.0",
        engine: "v6",
        drivetrain: "RWD",
        horsepower: 270,
        torque: 223,
        price: 38000
      }
    ]
  },
  {
    name: "Chevrolet",
    year: 1953,
    models: [
      {
        model: "Corvette",
        displacement: "3.9",
        engine: "v6",
        drivetrain: "RWD",
        horsepower: 150,
        torque: undefined,
        price: 300000
      },
      {
        model: "Camaro",
        displacement: "3.8",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 155,
        torque: 0,
        price: 100000
      }
    ]
  },
  {
    name: 'Chrysler',
    year: 2004,
    models: [
        {
        model: "300",
        displacement: "3.5",
        engine: "v6",
        drivetrain: "RWD",
        horsepower: 250,
        torque: 250,
        price: 30000
      },
      {
        model: "crossfire",
        displacement: "3.2",
        engine: "v6",
        drivetrain: "RWD",
        horsepower: 215,
        torque: 229,
        price: 33000
      }
    ]
  },
  {
    name: "Dodge",
    year: 1993,
    models: [
      {
        model: "Viper",
        displacement: "8",
        engine: "V10",
        drivetrain: "RWD",
        horsepower: 415,
        torque: 462,
        price: 25000
      },
      {
        model: "Challenger",
        displacement: "6.2",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 840,
        torque: 770,
        price: 85000
      }
    ]
  },
  {
    name: "Ferrari",
    year: 2012,
    models: [
      {
        model: "458",
        displacement: "4.5",
        engine: "V8",
        drivetrain: "Rwd",
        horsepower: 562,
        torque: 398,
        price: 270000
      },
      {
        model: "LaFerrari",
        displacement: "6.3",
        engine: "V12",
        drivetrain: "RWD",
        horsepower: 949,
        torque: 664,
        price: 1700000
      }
    ]
  },
  {
    name: "Ford",
    year: 2017,
    models: [
      {
        model: "Mustang",
        displacement: "5",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 480,
        torque: 420,
        price: 50000
      },
      {
        model: "GT",
        displacement: "5.4",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 550,
        torque: 500,
        price: 450000
      }
    ]
  },
  {
    name: "Honda",
    year: 1994,
    models: [
      {
        model: "NSX",
        displacement: "3",
        engine: "v6",
        drivetrain: "RWD",
        horsepower: 270,
        torque: 210,
        price: 30000
      },
      {
        model: "S2000",
        displacement: "2",
        engine: "I4",
        drivetrain: "RWD",
        horsepower: 247,
        torque: 161,
        price: 21000
      }
    ]
  },
  {
    name: "hyundai",
    year: 2006,
    models: [
      {
        model: "accent",
        displacement: "3.8",
        engine: "v6",
        drivetrain: "FWD",
        horsepower: 200,
        torque: 106,
        price: 13000
      },
      {
        model: "sonata",
        displacement: "2.4",
        engine: "I4",
        drivetrain: "FWD",
        horsepower: 180,
        torque: 220,
        price: 17000
      }
    ]
  },
  {
    name: "infiniti",
    year: 2015,
    models: [
      {
        model: "g30",
        displacement: "3.7",
        engine: "v6",
        drivetrain: "AWD",
        horsepower: 328,
        torque: 269,
        price: 40000
      },
      {
        model: "q60",
        displacement: "3.7",
        engine: "v6",
        drivetrain: "RWD",
        horsepower: 330,
        torque: 260,
        price: 25000
      }
    ]
  },
  {
    name: "Jaguar",
    year: 2019,
    models: [
      {
        model: "F-Type",
        displacement: "5.0",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 575,
        torque: 339,
        price: 69000
      },
      {
        model: "F-Pace",
        displacement: "5",
        engine: "V8",
        drivetrain: "AWD",
        horsepower: 550,
        torque: 502,
        price: 60000
      }
    ]
  },
  {
    name: "jeep",
    year: 2013,
    models: [
      {
        model: "grandcherokee",
        displacement: "3.6",
        engine: "v6",
        drivetrain: "AWD",
        horsepower: 300,
        torque: 330,
        price: 27000
      },
      {
        model: "wrangler",
        displacement: "3.6",
        engine: "v6",
        drivetrain: "AWD",
        horsepower: 285,
        torque: 260,
        price: 37000
      }
    ]
  },
  {
    name: "kia",
    year: 2015,
    models: [
      {
        model: "optima",
        displacement: "2.4",
        engine: "I4",
        drivetrain: "FWD",
        horsepower: 274,
        torque: 269,
        price: 23000
      },
      {
        model: "soul",
        displacement: "1.6",
        engine: "I4",
        drivetrain: "FWD",
        horsepower: 164,
        torque: 151,
        price: 14000
      }
    ]
  },
  {
    name: "Koenigsegg",
    year: 2017,
    models: [
      {
        model: "Agera",
        displacement: "4",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 1341,
        torque: 1011,
        price: 2000000
      },
      {
        model: "Regera",
        displacement: "4",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 1500,
        torque: 1475,
        price: 2100000
      }
    ]
  },
  {
    name: "landRover",
    year: 2016,
    models: [
      {
        model: "Discovery",
        displacement: "2",
        engine: "I4",
        drivetrain: "AWD",
        horsepower: 240,
        torque: 250,
        price: 38000
      },
      {
        model: "evoque",
        displacement: "2",
        engine: "I4",
        drivetrain: "AWD",
        horsepower: 240,
        torque: 250,
        price: 51000
      }
    ]
  },
  {
    name: "Lamborghini",
    year: 2017,
    models: [
      {
        model: "Huracan",
        displacement: "5.2",
        engine: "V10",
        drivetrain: "AWD",
        horsepower: 610,
        torque: 442,
        price: 320000
      },
      {
        model: "Aventador",
        displacement: "6.2",
        engine: "V12",
        drivetrain: "AWD",
        horsepower: 740,
        torque: 507,
        price: 480000
      }
    ]
  },
  {
    name: "Lexus",
    year: 2018,
    models: [
      {
        model: "LFA",
        displacement: "4.8",
        engine: "V10",
        drivetrain: "RWD",
        horsepower: 520,
        torque: 354,
        price: 400000
      },
      {
        model: "RCF",
        displacement: "5",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 467,
        torque: 389,
        price: 70000
      }
    ]
  },
  {
    name: "mazda",
    year: 2016,
    models: [
      {
        model: "3hatchback",
        displacement: "2",
        engine: "I4",
        drivetrain: "FWD",
        horsepower: 184,
        torque: 185,
        price: 18000
      },
      {
        model: "cx-3",
        displacement: "3",
        engine: "I4",
        drivetrain: "AWD",
        horsepower: 146,
        torque: 146,
        price: 20000
      }
    ]
  },
  {
    name: "McLaren",
    year: 2019,
    models: [
      {
        model: "600LT",
        displacement: "4",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 600,
        torque: 457,
        price: 280000
      },
      {
        model: "Senna",
        displacement: "4",
        engine: "V8",
        drivetrain: "RWD",
        horsepower: 789,
        torque: 590,
        price: 900000
      }
    ]
  },
  {
    name: "mercedes",
    year: 2013,
    models: [
      {
        model: "AMG GT Coupe",
        displacement: "6.2",
        engine: "v8",
        drivetrain: "RWD",
        horsepower: 583,
        torque: 479,
        price: 200000
      },
      {
        model: "E350",
        displacement: "3.5",
        engine: "v6",
        drivetrain: "AWD",
        horsepower: 302,
        torque: 273,
        price: 28000
      }
    ]
  },
  {
    name: "nissan",
    year: 2009,
    models: [
      {
        model: "370z",
        displacement: "3.7",
        engine: "v6",
        drivetrain: "RWD",
        horsepower: 350,
        torque: 276,
        price: 35000
      },
      {
        model: "skyline GTR",
        displacement: "3.8",
        engine: "v6",
        drivetrain: "AWD",
        horsepower: 480,
        torque: 430,
        price: 80000
      }
    ]
  },
  {
    name: "Porsche",
    year: 2016,
    models: [
      {
        model: "918 Spyder",
        displacement: "4.6",
        engine: "V8",
        drivetrain: "AWD",
        horsepower: 887,
        torque: 530,
        price: 1300000
      },
      {
        model: "911 Turbo",
        displacement: "3.6",
        engine: "Flat 6",
        drivetrain: "AWD",
        horsepower: 515,
        torque: 480,
        price: 90000
      }
    ]
  },
  {
    name: "saab",
    year: 2010,
    models: [
      {
        model: "9-5 sedan",
        displacement: "2.8",
        engine: "v6",
        drivetrain: "AWD",
        horsepower: 300,
        torque: 295,
        price: 50000
      },
      {
        model: "9-3x wagon",
        displacement: "2.0",
        engine: "I4",
        drivetrain: "AWD",
        horsepower: 210,
        torque: 221,
        price: 30000
      }
    ]
  },
  {
    name: "toyota",
    year: 2013,
    models: [
      {
        model: "4runner",
        displacement: "4.0",
        engine: "v6",
        drivetrain: "AWD",
        horsepower: 270,
        torque: 278,
        price: 33000
      },
      {
        model: "tundra",
        displacement: "4.0",
        engine: "v6",
        drivetrain: "RWD",
        horsepower: 331,
        torque: 401,
        price: 34000
      }
    ]
  },
  {
    name: "subaru",
    year: 2005,
    models: [
      {
        model: "impreza",
        displacement: "2.0",
        engine: "I4",
        drivetrain: "AWD",
        horsepower: 227,
        torque: 217,
        price: 20000
      },
      {
        model: "wrx",
        displacement: "2.0",
        engine: "I4",
        drivetrain: "AWD",
        horsepower: 227,
        torque: 217,
        price: 32000
      }
    ]
  },
];

module.exports = makes;
