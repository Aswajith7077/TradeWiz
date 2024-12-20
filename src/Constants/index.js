
const AppName = 'Insightica';
const DesignedBy = 'EWhizard';
const ButtonStyle = 'm-auto w-cover font-semibold border-solid border-2 border-blue-600 px-10 py-2 hover:text-white hover:bg-blue-600 rounded-[30px]';

const footerTitle = `@2024 ${AppName}. Alrights Reserved`;



const footerLinks = [
  	{
    	text: "Privacy Policy",
		link: "#footer"
  	},
	{
    	text: "Terms and conditions",
		link: "#footer"
  	},
	{
    	text: "Security",
		link: "#footer"
  	},
	{
    	text: "Cookie Declaration",
		link: "#footer"
  	}
]

const navLinks = [
    {
      text: "Home",
      link: "home",
    },
    {
      text: "About",
      link: "about",
    },
    {
      text: "Instructions",
      link: "instructions",
    },
    {
      text: "Examples",
      link: "examples",
    },
    {
      text: "Contact Us",
      link: "contact_us",
    },
  ];

const footerItems = [
	{
		title: "Company",
		links: [
			{
				text:"About",
				link:"#footer",
			},
			{
				text:"Press",
				link:"#footer",
			},
			{
				text:"Career",
				link:"#footer",
			},
			{
				text:"Contact",
				link:"#footer",
			}
		]
	},
	{
		title: "Partners",
		links: [
			{
				text:"About",
				link:"#footer",
			},
			{
				text:"Press",
				link:"#footer",
			},
			{
				text:"Career",
				link:"#footer",
			},
			{
				text:"Contact",
				link:"#footer",
			}
		]
	},
	{
		title: "Resources",
		links: [
			{
				text:"Resource Center",
				link:"#footer",
			},
			{
				text:"Testimonials",
				link:"#footer",
			},
			{
				text:"STV",
				link:"#footer",
			},
		]
	}
]
const tickers = [
    "RBLBANK.NS",    "SBILIFE.NS",    "CROMPTON.NS",    "NMDC.NS",    "FSL.NS",    "BHARATFORG.NS",
    "LTTS.NS",    "SAIL.NS",    "LICHSGFIN.NS",    "BOSCHLTD.NS",    "PETRONET.NS",    "ADANIPORTS.NS",
    "DCBBANK.NS",    "HDFCBANK.NS",    "COROMANDEL.NS",    "IGL.NS",    "GUJGASLTD.NS",    "JUBLINGREA.NS",
    "VEDL.NS",    "MRPL.NS",    "DIVISLAB.NS",    "CUMMINSIND.NS",    "TATACONSUM.NS",    "OFSS.NS",
    "TVSMOTOR.NS",    "CCL.NS",    "SHREECEM.NS",    "CHOLAFIN.NS",    "NATIONALUM.NS",    "RELCAPITAL.NS",
    "ALKEM.NS",    "BATAINDIA.NS",    "AMBUJACEM.NS",    "PERSISTENT.NS",    "CEATLTD.NS",    "JSL.NS",
    "M&MFIN.NS",    "JUBLFOOD.NS",    "HEROMOTOCO.NS",    "MANAPPURAM.NS",    "AIAENG.NS",    "NESTLEIND.NS",
    "LUPIN.NS",    "AUBANK.NS",    "HINDPETRO.NS",    "CADILAHC.NS",    "RECLTD.NS",    "FEDERALBNK.NS",
    "MARICO.NS",    "INDUSINDBK.NS",    "GICRE.NS",    "TATAMOTORS.NS",    "GODREJCP.NS",    "HINDUNILVR.NS",
    "GMRINFRA.NS",    "BAJAJ-AUTO.NS",    "YESBANK.NS",    "L&TFH.NS",    "ONGC.NS",    "IRB.NS",    "ALOKINDS.NS",
    "ESCORTS.NS",    "BERGEPAINT.NS",    "BAJFINANCE.NS",    "TORNTPHARM.NS",    "KSCL.NS",    "BBTC.NS",    "ULTRACEMCO.NS",
    "HINDALCO.NS",    "ABBOTINDIA.NS",    "GODREJIND.NS",    "CASTROLIND.NS",    "TATAPOWER.NS",    "AJANTAPHARM.NS",    "BLUEDART.NS",
    "BHARTIARTL.NS",    "ASIANPAINT.NS",    "PFC.NS",    "SRF.NS",    "CUB.NS",    "MUTHOOTFIN.NS",    "IDFCFIRSTB.NS",    "APTECHT.NS",
    "PNB.NS",    "SYNGENE.NS",    "AUROPHARMA.NS",    "ARVIND.NS",    "PFIZER.NS",
    "NHPC.NS",
    "SUNTV.NS",
    "VOLTAS.NS",
    "ICICIBANK.NS",
    "PTC.NS",
    "MFSL.NS",
    "CANFINHOME.NS",
    "APLLTD.NS",
    "M&M.NS",
    "INFY.NS",
    "TORNTPOWER.NS",
    "DEEPAKNTR.NS",
    "COLPAL.NS",
    "BEL.NS",
    "JSWSTEEL.NS",
    "RELIANCE.NS",
    "SBIN.NS",
    "HDFC.NS",
    "AJANTPHARM.NS",
    "DLF.NS",
    "SOBHA.NS",
    "WOCKPHARMA.NS",
    "GLAXO.NS",
    "MOTHERSUMI.NS",
    "ADANIPOWER.NS",
    "TATAELXSI.NS",
    "BAJAJELEC.NS",
    "KEC.NS",
    "MARUTI.NS",
    "COFORGE.NS",
    "IOC.NS",
    "KOTAKBANK.NS",
    "BOMDYEING.NS",
    "ERIS.NS",
    "ASTRAZEN.NS",
    "VGUARD.NS",
    "SUNPHARMA.NS",
    "ZEEL.NS",
    "POWERGRID.NS",
    "RPOWER.NS",
    "EICHERMOT.NS",
    "KPITTECH.NS",
    "MRF.NS",
    "INDIGO.NS",
    "ITC.NS",
    "EMAMIREAL.NS",
    "EDELWEISS.NS",
    "COALINDIA.NS",
    "APOLLOHOSP.NS",
    "ICICIGI.NS",
    "ACC.NS",
    "GLENMARK.NS",
    "EMAMILTD.NS",
    "FORTIS.NS",
    "TITAN.NS",
    "HDFCAMC.NS",
    "ATUL.NS",
    "TATACHEM.NS",
    "GRASIM.NS",
    "TECHM.NS",
    "MPHASIS.NS",
    "TATASPONGE.NS",
    "TATASTEEL.NS",
    "BRITANNIA.NS",
    "SBICARD.NS",
    "APOLLOTYRE.NS",
    "ASHOKLEY.NS",
    "MCX.NS",
    "PNBHOUSING.NS",
    "GAIL.NS",
    "RELINFRA.NS",
    "CGPOWER.NS",
    "BALKRISIND.NS",
    "TCS.NS",
    "IFCI.NS",
    "ADANITRANS.NS",
    "REPCOHOME.NS",
    "WIPRO.NS",
    "CONCOR.NS",
    "JINDALSTEL.NS",
    "IBULHSGFIN.NS",
    "INDIAMART.NS",
    "TATAMTRDVR.NS",
    "BPCL.NS",
    "ADANIGREEN.NS",
    "DRREDDY.NS",
    "HCLTECH.NS",
    "CIPLA.NS",
    "TTML.NS",
    "UPL.NS",
    "HDFCLIFE.NS",
    "NBCC.NS",
    "IRCTC.NS",
    "VINYLINDIA.NS",
    "UBL.NS",
    "ICICIPRULI.NS",
    "BHEL.NS",
    "BIOCON.NS",
    "BANKBARODA.NS",
    "LT.NS",
    "EXIDEIND.NS",
    "RAMCOCEM.NS",
    "PAGEIND.NS",
    "DHFL.NS",
    "GRAPHITE.NS",
    "RALLIS.NS",
    "THERMAX.NS",
    "GODFRYPHLP.NS",
    "BOSCHLTD.NS",
    "SCHAEFFLER.NS",
    "VIPIND.NS",
    "RAJESHEXPO.NS",
    "FRETAIL.NS",
    "FINCABLES.NS",
    "SRTRANSFIN.NS",
    "KANSAINER.NS",
    "SHK.NS",
    "ENDURANCE.NS",
    "VGUARD.NS",
    "APARINDS.NS",
    "VAIBHAVGBL.NS",
    "SYMPHONY.NS",
    "HEG.NS",
    "BATAINDIA.NS",
    "MOIL.NS",
    "BASF.NS",
    "TV18BRDCST.NS",
    "COROMANDEL.NS",
    "BALKRISHNA.NS",
    "JAGRAN.NS",
    "HONAUT.NS",
    "LAOPALA.NS",
    "POLYCAB.NS",
    "SUVENPHAR.NS",
    "PERSISTENT.NS",
    "CHENNPETRO.NS",
    "CESC.NS",
    "MAHINDCIE.NS",
    "NESCO.NS",
    "WESTLIFE.NS",
    "SUDARSCHEM.NS",
    "SKFINDIA.NS",
    "MASTEK.NS",
    "TANLA.NS",
    "JKCEMENT.NS",
    "TIMKEN.NS",
    "NAUKRI.NS",
    "NESTLEIND.NS",
    "MAHSEAMLES.NS",
    "PGHH.NS",
    "LALPATHLAB.NS",
    "DIXON.NS",
    "ASTRAZEN.NS",
    "MAHSCOOTER.NS",
    "TATACOMM.NS",
    "QUESS.NS",
    "FLUOROCHEM.NS",
    "GILLETTE.NS",
    "PRSMJOHNSN.NS",
    "JCHAC.NS",
    "BALAMINES.NS",
    "PIIND.NS",
    "GUJALKALI.NS",
    "SONATSOFTW.NS",
    "NAVNETEDUL.NS",
    "HAWKINCOOK.NS",
    "SOLARINDS.NS",
    "JUBLINGREA.NS",
    "CRISIL.NS",
    "ECLERX.NS",
    "MINDACORP.NS",
    "SCHAND.NS",
    "ORIENTELEC.NS",
    "GRINDWELL.NS",
    "SIS.NS",
    "WHIRLPOOL.NS",
    "HEIDELBERG.NS",
    "HSCL.NS",
    "TASTYBITE.NS",
    "VAKRANGEE.NS",
    "WABAG.NS",
    "NIITLTD.NS",
    "TEAMLEASE.NS",
    "SANOFI.NS",
    "ELGIEQUIP.NS",
    "GEPIL.NS",
    "REGENCERAM.NS",
    "CHOLAHLDNG.NS",
    "ROSSARI.NS",
    "IFBIND.NS",
    "HINDZINC.NS",
    "LINDEINDIA.NS",
    "INFIBEAM.NS",
    "FINPIPE.NS",
    "ZENSARTECH.NS",
    "SHOPERSTOP.NS",
    "MAYURUNIQ.NS",
    "EROSMEDIA.NS",
    "UFLEX.NS",
    "MIDHANI.NS",
    "SCHNEIDER.NS",
    "BEML.NS",
    "VSTTILLERS.NS",
    "SHRIRAMCIT.NS",
    "TATAINVEST.NS",
    "MCX.NS",
    "WABCOINDIA.NS",
    "JYOTHYLAB.NS",
    "MAZDOCK.NS",
    "TATAMETALI.NS",
    "FDC.NS",
    "GABRIEL.NS",
    "RITES.NS",
    "FAIRCHEM.NS",
    "RANEHOLDIN.NS",
    "ORIENTREF.NS",
    "TATAELXSI.NS",
    "JUSTDIAL.NS",
    "ATFL.NS",
    "CERA.NS",
    "AMBER.NS",
    "EIDPARRY.NS",
    "RAJRATAN.NS",
    "JSWHL.NS",
    "GARFIBRES.NS",
    "ICRA.NS",
    "GOACARBON.NS",
    "COCHINSHIP.NS",
    "SFL.NS",
    "PRECAM.NS",
    "IFBAGRO.NS",
    "HIKAL.NS",
    "FIEMIND.NS",
    "DHANUKA.NS",
    "BBTC.NS",
    "TRIVENI.NS",
    "UTIAMC.NS",
    "CANFINHOME.NS",
    "ZUARI.NS",
    "HIKAL.NS",
    "CAPPL.NS",
    "RSYSTEMS.NS",
    "WOCKPHARMA.NS",
    "SUBROS.NS",
    "ORIENTBELL.NS",
    "EVERESTIND.NS",
    "SUPRAJIT.NS",
    "ARVINDFASN.NS",
    "STERTOOLS.NS",
    "SADBHAV.NS",
    "PSPPROJECT.NS",
    "JAICORPLTD.NS",
    "KPRMILL.NS",
    "GULFPETRO.NS",
    "VTL.NS",
    "KOLTEPATIL.NS",
    "IMFA.NS",
    "KIRLOSENG.NS",
    "STARPAPER.NS",
    "SWANENERGY.NS",
    "VISAKAIND.NS",
    "NILKAMAL.NS",
    "GANDHITUBE.NS",
    "SUPPETRO.NS",
    "IOLCP.NS",
    "TNPL.NS",
    "MMTC.NS",
    "THOMASCOOK.NS",
    "RUCHISOYA.NS",
    "SOMANYCERA.NS",
    "MANGALAM.NS",
    "KARDA.NS",
    "INSECTICID.NS",
    "STOVEKRAFT.NS",
    "SPICEJET.NS",
    "BRFL.NS",
]

const globeConfig = {
  pointSize: 4,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#062056",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5
};
const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -1.303396,
    endLng: 36.852443,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 2,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 2,
    startLat: -15.785493,
    startLng: -47.909029,
    endLat: 36.162809,
    endLng: -115.119411,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 3,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 3,
    startLat: 21.3099,
    startLng: -157.8581,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 3,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 4,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 4,
    startLat: -34.6037,
    startLng: -58.3816,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 4,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 5,
    startLat: 14.5995,
    startLng: 120.9842,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 5,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 5,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 48.8566,
    endLng: -2.3522,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 6,
    startLat: -15.432563,
    startLng: 28.315853,
    endLat: 1.094136,
    endLng: -63.34546,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 6,
    startLat: 37.5665,
    startLng: 126.978,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 51.5072,
    endLng: -0.1276,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 7,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -15.595412,
    endLng: -56.05918,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 7,
    startLat: 48.8566,
    startLng: -2.3522,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 7,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 8,
    startLat: -8.833221,
    startLng: 13.264837,
    endLat: -33.936138,
    endLng: 18.436529,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 8,
    startLat: 49.2827,
    startLng: -123.1207,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 8,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 9,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 9,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 9,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.5,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 10,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: 28.6139,
    endLng: 77.209,
    arcAlt: 0.7,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 10,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 10,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 52.3676,
    endLng: 4.9041,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 11,
    startLat: 41.9028,
    startLng: 12.4964,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 11,
    startLat: -6.2088,
    startLng: 106.8456,
    endLat: 31.2304,
    endLng: 121.4737,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 11,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 12,
    startLat: 34.0522,
    startLng: -118.2437,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 12,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.2,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 12,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 34.0522,
    endLng: -118.2437,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 13,
    startLat: 52.52,
    startLng: 13.405,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 13,
    startLat: 11.986597,
    startLng: 8.571831,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 13,
    startLat: -22.9068,
    startLng: -43.1729,
    endLat: -34.6037,
    endLng: -58.3816,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  },
  {
    order: 14,
    startLat: -33.936138,
    startLng: 18.436529,
    endLat: 21.395643,
    endLng: 39.883798,
    arcAlt: 0.3,
    color: colors[Math.floor(Math.random() * (colors.length - 1))]
  }
];

export{
    AppName,
    DesignedBy,
    ButtonStyle,
    tickers,
    navLinks,
	footerTitle,
	footerLinks,
	footerItems,
  globeConfig,
  sampleArcs,
}