import logo from "./logo.svg";
import Mainplayer from "./Mainplayer";
import Player from "./Player";
import "./App.css";

var videos = [
  {
    id: 1,
    title: "You Will Never Be Lazy Again|Jim Kwik",
    thumbnail_url:
      "https://i.ytimg.com/vi/REeROakzwfU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYrXuYIpKAR9e8_4NW2SJjJREzGg",
    likes: 13000,
    views: 13000000,
    channelName: "Be Inspired",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKYcv_sW-2a37K0ZkZvTyRyC4Fw8RsK_WaHlQbQjMw=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    title: "How Has Brexit Been Going?|Economics Explained",
    thumbnail_url:
      "https://i.ytimg.com/vi/P0G3lYTOI0Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6zvQg1UXBWMYDa6DL8jFFpLOK3w",
    likes: 13000,
    views: 13000000,
    channelName: "Economics Explained ",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/LKssvfNuBZEZVm8uw78-X0X5oJbMFqViWN_UuzK450jyU9kT9Oy9lDcIjrPaEFmli6B9KANWnA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    title: "Bun is disrupting JavaScript land",
    thumbnail_url:
      "https://i.ytimg.com/vi/dWqNgzZwVJQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCajTGE3pTPfJPs6jpIaLlZ9UTjvA",
    likes: 1500,
    views: 2300,
    channelName: "Fireship",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    title: "Cities at Sea: How Aircraft Carriers Work",
    thumbnail_url:
      "https://i.ytimg.com/vi/c0pS3Zx7Fc8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHtFCZ_tyHtgsJ6Tyzx7Zbny9iPg",
    likes: 1500,
    views: 2300,
    channelName: "Wendover Productions",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/Qs26R6RA_ZNwCyPLsdtOS-8sM6k_TFVa6vNgFWbezvDr_mN097YVwT8fKGj5P_pY6midBYy6fQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 5,
    title: "The Ocean is Way Deeper Than You Think",
    thumbnail_url:
      "https://i.ytimg.com/vi/GE-lAftuQgc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAk_ZGlUhl8uxa8f4nxwNC0dTBA5Q",
    likes: 1500,
    views: 2300,
    channelName: "RealLifeLore",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKa4Ei0w6zq6FXKCD3tBEdPvTd70Cmo8ZoP5G02EHQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 6,
    title: "How A Nuclear War Will Start-Minute by Minute",
    thumbnail_url:
      "https://i.ytimg.com/vi/wmP3MBjsx20/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCR_EBnAvgnzfrAP8qWNJFhffN_wA",
    likes: 1500,
    views: 2300,
    channelName: "Kurzgesagt – In a Nutshell ",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKaHuotB178A3_ar_1xwrchH_bEo4wjg6A-kXFErPA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 7,
    title: "5 Majedaar Gadgets I bought Online !",
    thumbnail_url:
      "https://i.ytimg.com/vi/4XsfwD1ZwlU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtJzYzp045wftiOvpawOsjWME1eg",
    likes: 1500,
    views: 2300,
    channelName: "Tech Burner",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/0op3NrEEmhcR4jwkCnSNv4PWvHE6kj7He8C2aocxyLfx1Tx-hN1JwmxaUj5O626ooqnWSrCJ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 8,
    title: "How to Prepare and Speak in Public",
    thumbnail_url:
      "https://i.ytimg.com/vi/352bQTw8T0k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSJTQ_1DYyS4kxnMBHjACRqV3lMg",
    likes: 1500,
    views: 2300,
    channelName: "Howcast",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKa2q7lycdP92alk6SxCFUx3cws4yQEAdgB7h5Z-eQ=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 9,
    title: "Inside China’s Property Collapse (Evergrande Disaster)",
    thumbnail_url:
      "https://i.ytimg.com/vi/4qDIkbCTf8A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBy-5k9yTrrf1RJiNhws3cAtSql9w",
    likes: 1500,
    views: 2300,
    channelName: "ColdFusion",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/ytc/APkrFKZnqu0dlQEACF98tCZHO1yYwzkqbbLZUjPMDm_fbA=s176-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 10,
    title: "Wheel of Musical Impressions with Adam Levine",
    thumbnail_url:
      "https://i.ytimg.com/vi/zCbfWGgp9qs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBk1Ym5ErObtiYgTmVCvUFetUV8jg",
    likes: 1500,
    views: 2300,
    channelName: "The Tonight Show Starring Jimmy Fallon",
    channelLogoUrl:
      "https://yt3.googleusercontent.com/Lp9cu-xgKL0QYxdJ268CaZ63SrmODmZT2uRJjwPHvoeLOvd1LLNJWUd45tYR_VW9z5APPIPJpw=s176-c-k-c0x00ffffff-no-rj",
  },
];



function App() {
  return(<div className="App">
 <Player videos={videos} />
 <Mainplayer videos={videos} />
  </div>) 
}

export default App;
