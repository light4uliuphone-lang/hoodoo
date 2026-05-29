---
layout: post
title: "行星時刻計算器"
date: 2026-05-29
author: 靈火巫境
category: [magic]
---

## 使用方式

- 在搜尋欄輸入城市名稱（中文或英文皆可），或直接點選下方常用城市標籤
- 用日期欄位選擇任意日期，或用「前一天 / 後一天」按鈕逐日切換
- 月相卡顯示該日相位、照度與漸盈漸虧；下方並列「下次滿月」與「下次新月」的日期
- 行星時刻表會自動標示當下所在的時刻

{% include google-ad-bottom.html %}

{% raw %}
<style>
.ph-app{
    --bg:#0e0b16; --panel:#181226; --ink:#ece6f5; --dim:#9a8fb5;
    --line:#2c2340; --accent:#d4a017; --now:#3a2d10;
  }.ph-app *{box-sizing:border-box;margin:0;padding:0}.ph-app{
    background:radial-gradient(circle at 50% -10%,#241a3a,#0e0b16 60%);
    color:var(--ink);font-family:"Iowan Old Style","Songti TC",Georgia,"Noto Serif TC",serif;
    min-height:100vh;padding:2rem 1rem;line-height:1.5;
  }.ph-app .wrap{max-width:680px;margin:0 auto}.ph-app h1{font-size:1.6rem;font-weight:600;letter-spacing:.04em;text-align:center;margin-bottom:.3rem}.ph-app .sub{text-align:center;color:var(--dim);font-size:.85rem;margin-bottom:1.6rem}.ph-app .controls{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:1rem 1.1rem;margin-bottom:1.2rem;}.ph-app .field{display:flex;gap:.5rem;margin-bottom:.7rem}.ph-app .field:last-child{margin-bottom:0}.ph-app input[type=text], .ph-app input[type=date]{flex:1;padding:.65rem .8rem;border:1px solid var(--line);border-radius:10px;background:#100c1c;color:var(--ink);font:inherit;font-size:.95rem;min-width:0;}.ph-app input::placeholder{color:#6b6285}.ph-app button{border:none;border-radius:10px;background:var(--accent);color:#1a1205;font:inherit;font-weight:600;cursor:pointer;padding:.65rem 1rem;letter-spacing:.03em;white-space:nowrap;}.ph-app button.ghost{background:transparent;color:var(--accent);border:1px solid var(--line)}.ph-app button:active{transform:translateY(1px)}.ph-app .chips{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.2rem}.ph-app .chip{font-size:.8rem;padding:.35rem .7rem;border:1px solid var(--line);border-radius:999px;background:#100c1c;color:var(--dim);cursor:pointer}.ph-app .chip:hover{color:var(--accent);border-color:var(--accent)}.ph-app .results{margin-top:.4rem;border:1px solid var(--line);border-radius:10px;overflow:hidden}.ph-app .results .opt{padding:.6rem .8rem;cursor:pointer;border-bottom:1px solid var(--line);font-size:.9rem}.ph-app .results .opt:last-child{border-bottom:none}.ph-app .results .opt:hover{background:var(--now)}.ph-app .results .opt small{color:var(--dim);margin-left:.4rem}.ph-app .nav{display:grid;grid-template-columns:auto 1fr auto;gap:.6rem;align-items:center;margin-bottom:1.2rem}.ph-app .nav .date{text-align:center;font-weight:600;letter-spacing:.04em}.ph-app .nav .date small{display:block;color:var(--dim);font-weight:400;font-size:.75rem}.ph-app .meta{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:1rem 1.2rem;margin-bottom:1.4rem;font-size:.9rem;color:var(--dim);}.ph-app .meta b{color:var(--ink);font-weight:600}.ph-app .meta .ruler{color:var(--accent)}.ph-app .moon{display:flex;align-items:center;gap:1rem;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:1rem 1.2rem;margin-bottom:1.4rem;}.ph-app .moon svg{flex-shrink:0}.ph-app .moon .mtext{font-size:.9rem;color:var(--dim)}.ph-app .moon .mtext b{display:block;color:var(--ink);font-size:1.05rem;font-weight:600;margin-bottom:.15rem;letter-spacing:.03em}.ph-app .nextmoon{display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:1.4rem}.ph-app .nextmoon .card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:.9rem 1rem;text-align:center;font-size:.85rem;color:var(--dim);}.ph-app .nextmoon .card .glyph{font-size:1.6rem;margin-bottom:.2rem}.ph-app .nextmoon .card b{display:block;color:var(--ink);font-size:.95rem;font-weight:600;margin:.15rem 0 .1rem;letter-spacing:.03em}.ph-app .nextmoon .card .when{font-variant-numeric:tabular-nums}.ph-app .nextmoon .card .in{color:var(--accent);font-size:.78rem;margin-top:.15rem}.ph-app .nextmoon{display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:1.4rem}.ph-app .nextmoon .card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:.9rem 1rem;text-align:center}.ph-app .nextmoon .card .lbl{color:var(--dim);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.3rem}.ph-app .nextmoon .card .icon{font-size:1.4rem;margin-bottom:.2rem}.ph-app .nextmoon .card .d{font-weight:600;color:var(--ink);font-size:1rem;letter-spacing:.03em}.ph-app .nextmoon .card .dd{color:var(--accent);font-size:.85rem;margin-top:.15rem}.ph-app .row{display:grid;grid-template-columns:2.4rem 1fr auto;gap:.8rem;align-items:center;padding:.7rem .9rem;border:1px solid var(--line);border-radius:11px;margin-bottom:.5rem;background:var(--panel);}.ph-app .row.now{border-color:var(--accent);background:var(--now)}.ph-app .row.night{opacity:.78}.ph-app .glyph{font-size:1.5rem;text-align:center;color:var(--accent)}.ph-app .name{font-weight:600}.ph-app .name small{display:block;color:var(--dim);font-weight:400;font-size:.72rem;letter-spacing:.05em}.ph-app .time{font-variant-numeric:tabular-nums;color:var(--dim);font-size:.85rem;text-align:right}.ph-app .sec{margin:1.4rem 0 .6rem;color:var(--dim);font-size:.8rem;letter-spacing:.12em;text-transform:uppercase}.ph-app .err{color:#e88;text-align:center;font-size:.85rem;padding:.6rem;line-height:1.45}.ph-app .hint{text-align:center;color:var(--dim);font-size:.85rem;padding:1rem}
</style>

<div class="ph-app">
<div class="wrap">
  <h1>行星時刻</h1>
  <div class="sub">Planetary Hours · 迦勒底秩序 · 離線版</div>
  <div class="controls">
    <div class="field">
      <input type="text" id="city" placeholder="搜尋城市，例如 台北 / Tokyo / London">
      <button id="search">搜尋</button>
    </div>
    <div id="cityResults"></div>
    <div class="chips" id="chips"></div>
    <div class="field" style="margin-top:.7rem">
      <input type="date" id="date">
      <button class="ghost" id="locBtn">用我的位置</button>
    </div>
  </div>
  <div class="nav">
    <button class="ghost" id="prev">‹ 前一天</button>
    <div class="date" id="dateLabel"></div>
    <button class="ghost" id="next">後一天 ›</button>
  </div>
  <div id="moonBox"></div>
  <div id="nextMoonBox"></div>
  <div id="nextMoonBox"></div>
  <div id="out"><div class="hint">先搜尋城市或點下方常用城市，即可顯示該日的行星時刻與月相。</div></div>
</div>

<script>
/* === SunCalc 1.9.0 內嵌版 (c) 2011-2015 Vladimir Agafonkin, BSD License === */
/*
 (c) 2011-2015, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun/moon position and light phases.
 https://github.com/mourner/suncalc
*/

(function () { 'use strict';

// shortcuts for easier to read formulas

var PI   = Math.PI,
    sin  = Math.sin,
    cos  = Math.cos,
    tan  = Math.tan,
    asin = Math.asin,
    atan = Math.atan2,
    acos = Math.acos,
    rad  = PI / 180;

// sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas


// date/time constants and conversions

var dayMs = 1000 * 60 * 60 * 24,
    J1970 = 2440588,
    J2000 = 2451545;

function toJulian(date) { return date.valueOf() / dayMs - 0.5 + J1970; }
function fromJulian(j)  { return new Date((j + 0.5 - J1970) * dayMs); }
function toDays(date)   { return toJulian(date) - J2000; }


// general calculations for position

var e = rad * 23.4397; // obliquity of the Earth

function rightAscension(l, b) { return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l)); }
function declination(l, b)    { return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l)); }

function azimuth(H, phi, dec)  { return atan(sin(H), cos(H) * sin(phi) - tan(dec) * cos(phi)); }
function altitude(H, phi, dec) { return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(H)); }

function siderealTime(d, lw) { return rad * (280.16 + 360.9856235 * d) - lw; }

function astroRefraction(h) {
    if (h < 0) // the following formula works for positive altitudes only.
        h = 0; // if h = -0.08901179 a div/0 would occur.

    // formula 16.4 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
    // 1.02 / tan(h + 10.26 / (h + 5.10)) h in degrees, result in arc minutes -> converted to rad:
    return 0.0002967 / Math.tan(h + 0.00312536 / (h + 0.08901179));
}

// general sun calculations

function solarMeanAnomaly(d) { return rad * (357.5291 + 0.98560028 * d); }

function eclipticLongitude(M) {

    var C = rad * (1.9148 * sin(M) + 0.02 * sin(2 * M) + 0.0003 * sin(3 * M)), // equation of center
        P = rad * 102.9372; // perihelion of the Earth

    return M + C + P + PI;
}

function sunCoords(d) {

    var M = solarMeanAnomaly(d),
        L = eclipticLongitude(M);

    return {
        dec: declination(L, 0),
        ra: rightAscension(L, 0)
    };
}


var SunCalc = {};


// calculates sun position for a given date and latitude/longitude

SunCalc.getPosition = function (date, lat, lng) {

    var lw  = rad * -lng,
        phi = rad * lat,
        d   = toDays(date),

        c  = sunCoords(d),
        H  = siderealTime(d, lw) - c.ra;

    return {
        azimuth: azimuth(H, phi, c.dec),
        altitude: altitude(H, phi, c.dec)
    };
};


// sun times configuration (angle, morning name, evening name)

var times = SunCalc.times = [
    [-0.833, 'sunrise',       'sunset'      ],
    [  -0.3, 'sunriseEnd',    'sunsetStart' ],
    [    -6, 'dawn',          'dusk'        ],
    [   -12, 'nauticalDawn',  'nauticalDusk'],
    [   -18, 'nightEnd',      'night'       ],
    [     6, 'goldenHourEnd', 'goldenHour'  ]
];

// adds a custom time to the times config

SunCalc.addTime = function (angle, riseName, setName) {
    times.push([angle, riseName, setName]);
};


// calculations for sun times

var J0 = 0.0009;

function julianCycle(d, lw) { return Math.round(d - J0 - lw / (2 * PI)); }

function approxTransit(Ht, lw, n) { return J0 + (Ht + lw) / (2 * PI) + n; }
function solarTransitJ(ds, M, L)  { return J2000 + ds + 0.0053 * sin(M) - 0.0069 * sin(2 * L); }

function hourAngle(h, phi, d) { return acos((sin(h) - sin(phi) * sin(d)) / (cos(phi) * cos(d))); }
function observerAngle(height) { return -2.076 * Math.sqrt(height) / 60; }

// returns set time for the given sun altitude
function getSetJ(h, lw, phi, dec, n, M, L) {

    var w = hourAngle(h, phi, dec),
        a = approxTransit(w, lw, n);
    return solarTransitJ(a, M, L);
}


// calculates sun times for a given date, latitude/longitude, and, optionally,
// the observer height (in meters) relative to the horizon

SunCalc.getTimes = function (date, lat, lng, height) {

    height = height || 0;

    var lw = rad * -lng,
        phi = rad * lat,

        dh = observerAngle(height),

        d = toDays(date),
        n = julianCycle(d, lw),
        ds = approxTransit(0, lw, n),

        M = solarMeanAnomaly(ds),
        L = eclipticLongitude(M),
        dec = declination(L, 0),

        Jnoon = solarTransitJ(ds, M, L),

        i, len, time, h0, Jset, Jrise;


    var result = {
        solarNoon: fromJulian(Jnoon),
        nadir: fromJulian(Jnoon - 0.5)
    };

    for (i = 0, len = times.length; i < len; i += 1) {
        time = times[i];
        h0 = (time[0] + dh) * rad;

        Jset = getSetJ(h0, lw, phi, dec, n, M, L);
        Jrise = Jnoon - (Jset - Jnoon);

        result[time[1]] = fromJulian(Jrise);
        result[time[2]] = fromJulian(Jset);
    }

    return result;
};


// moon calculations, based on http://aa.quae.nl/en/reken/hemelpositie.html formulas

function moonCoords(d) { // geocentric ecliptic coordinates of the moon

    var L = rad * (218.316 + 13.176396 * d), // ecliptic longitude
        M = rad * (134.963 + 13.064993 * d), // mean anomaly
        F = rad * (93.272 + 13.229350 * d),  // mean distance

        l  = L + rad * 6.289 * sin(M), // longitude
        b  = rad * 5.128 * sin(F),     // latitude
        dt = 385001 - 20905 * cos(M);  // distance to the moon in km

    return {
        ra: rightAscension(l, b),
        dec: declination(l, b),
        dist: dt
    };
}

SunCalc.getMoonPosition = function (date, lat, lng) {

    var lw  = rad * -lng,
        phi = rad * lat,
        d   = toDays(date),

        c = moonCoords(d),
        H = siderealTime(d, lw) - c.ra,
        h = altitude(H, phi, c.dec),
        // formula 14.1 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
        pa = atan(sin(H), tan(phi) * cos(c.dec) - sin(c.dec) * cos(H));

    h = h + astroRefraction(h); // altitude correction for refraction

    return {
        azimuth: azimuth(H, phi, c.dec),
        altitude: h,
        distance: c.dist,
        parallacticAngle: pa
    };
};


// calculations for illumination parameters of the moon,
// based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
// Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.

SunCalc.getMoonIllumination = function (date) {

    var d = toDays(date || new Date()),
        s = sunCoords(d),
        m = moonCoords(d),

        sdist = 149598000, // distance from Earth to Sun in km

        phi = acos(sin(s.dec) * sin(m.dec) + cos(s.dec) * cos(m.dec) * cos(s.ra - m.ra)),
        inc = atan(sdist * sin(phi), m.dist - sdist * cos(phi)),
        angle = atan(cos(s.dec) * sin(s.ra - m.ra), sin(s.dec) * cos(m.dec) -
                cos(s.dec) * sin(m.dec) * cos(s.ra - m.ra));

    return {
        fraction: (1 + cos(inc)) / 2,
        phase: 0.5 + 0.5 * inc * (angle < 0 ? -1 : 1) / Math.PI,
        angle: angle
    };
};


function hoursLater(date, h) {
    return new Date(date.valueOf() + h * dayMs / 24);
}

// calculations for moon rise/set times are based on http://www.stargazing.net/kepler/moonrise.html article

SunCalc.getMoonTimes = function (date, lat, lng, inUTC) {
    var t = new Date(date);
    if (inUTC) t.setUTCHours(0, 0, 0, 0);
    else t.setHours(0, 0, 0, 0);

    var hc = 0.133 * rad,
        h0 = SunCalc.getMoonPosition(t, lat, lng).altitude - hc,
        h1, h2, rise, set, a, b, xe, ye, d, roots, x1, x2, dx;

    // go in 2-hour chunks, each time seeing if a 3-point quadratic curve crosses zero (which means rise or set)
    for (var i = 1; i <= 24; i += 2) {
        h1 = SunCalc.getMoonPosition(hoursLater(t, i), lat, lng).altitude - hc;
        h2 = SunCalc.getMoonPosition(hoursLater(t, i + 1), lat, lng).altitude - hc;

        a = (h0 + h2) / 2 - h1;
        b = (h2 - h0) / 2;
        xe = -b / (2 * a);
        ye = (a * xe + b) * xe + h1;
        d = b * b - 4 * a * h1;
        roots = 0;

        if (d >= 0) {
            dx = Math.sqrt(d) / (Math.abs(a) * 2);
            x1 = xe - dx;
            x2 = xe + dx;
            if (Math.abs(x1) <= 1) roots++;
            if (Math.abs(x2) <= 1) roots++;
            if (x1 < -1) x1 = x2;
        }

        if (roots === 1) {
            if (h0 < 0) rise = i + x1;
            else set = i + x1;

        } else if (roots === 2) {
            rise = i + (ye < 0 ? x2 : x1);
            set = i + (ye < 0 ? x1 : x2);
        }

        if (rise && set) break;

        h0 = h2;
    }

    var result = {};

    if (rise) result.rise = hoursLater(t, rise);
    if (set) result.set = hoursLater(t, set);

    if (!rise && !set) result[ye > 0 ? 'alwaysUp' : 'alwaysDown'] = true;

    return result;
};


// export as Node module / AMD module / browser variable
if (typeof exports === 'object' && typeof module !== 'undefined') module.exports = SunCalc;
else if (typeof define === 'function' && define.amd) define(SunCalc);
else window.SunCalc = SunCalc;

}());

</script>
<script>
const CHALDEAN=["Saturn","Jupiter","Mars","Sun","Venus","Mercury","Moon"];
const INFO={
  Sun:{zh:"太陽",glyph:"☉"},Moon:{zh:"月亮",glyph:"☽"},Mars:{zh:"火星",glyph:"♂"},
  Mercury:{zh:"水星",glyph:"☿"},Jupiter:{zh:"木星",glyph:"♃"},
  Venus:{zh:"金星",glyph:"♀"},Saturn:{zh:"土星",glyph:"♄"},
};
const DAY_RULER=["Sun","Moon","Mars","Mercury","Jupiter","Venus","Saturn"];
const WD=["週日","週一","週二","週三","週四","週五","週六"];
const PRESETS=[
  {zh:"台北",lat:25.033,lng:121.565},{zh:"高雄",lat:22.627,lng:120.302},
  {zh:"台中",lat:24.147,lng:120.673},{zh:"香港",lat:22.319,lng:114.169},
  {zh:"東京",lat:35.690,lng:139.692},{zh:"倫敦",lat:51.507,lng:-0.128},
  {zh:"紐約",lat:40.713,lng:-74.006},
];
let state={lat:null,lng:null,place:"",date:new Date()};
const fmt=d=>d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});

// 用 SunCalc 取日出日落（給定本地日期的當天中午為基準避免邊界問題）
function sunTimes(date,lat,lng){
  const noon=new Date(date.getFullYear(),date.getMonth(),date.getDate(),12,0,0);
  const t=SunCalc.getTimes(noon,lat,lng);
  // 極區：SunCalc 在無日出/日落時回傳 Invalid Date
  if(isNaN(t.sunrise)||isNaN(t.sunset)){
    const pos=SunCalc.getPosition(noon,lat,lng);
    return{polar: pos.altitude>0?"day":"night"};
  }
  return{sunrise:t.sunrise,sunset:t.sunset,polar:null};
}

// 用 SunCalc 取月相。phase: 0=新月,0.25=上弦,0.5=滿月,0.75=下弦
function moonPhase(date){
  const noon=new Date(date.getFullYear(),date.getMonth(),date.getDate(),12,0,0);
  const m=SunCalc.getMoonIllumination(noon);
  const phase=m.phase;            // 0..1
  const illum=Math.round(m.fraction*100);
  const waxing=phase<0.5;
  const age=phase*29.530588853;
  let name;
  if(phase<0.0345||phase>=0.9655)name="新月";
  else if(phase<0.2155)name="眉月（蛾眉月）";
  else if(phase<0.2845)name="上弦月";
  else if(phase<0.4655)name="盈凸月";
  else if(phase<0.5345)name="滿月";
  else if(phase<0.7155)name="虧凸月";
  else if(phase<0.7845)name="下弦月";
  else name="殘月";
  return{phase,illum,waxing,age,name};
}

// 找下一次目標相位（target=0 新月,0.5 滿月）發生的時刻
// 從 from 開始往後搜，最多 35 天
function findNextPhase(from, target){
  const phaseAt = t => SunCalc.getMoonIllumination(t).phase;
  // 相位是 0~1 循環，計算與 target 的「循環距離」，找它從正轉負的零交點
  // 用 sin(2π(phase - target)) 把目標點轉為零交點，且方向一致（漸增穿越）
  const f = t => Math.sin(2*Math.PI*(phaseAt(t) - target));
  let t0 = from.getTime();
  const HOUR = 3600*1000;
  const END = t0 + 35*24*HOUR;
  let prev = f(new Date(t0));
  // 每 1 小時掃描找零交點：prev<0 且 cur>=0 表示剛跨過目標相位
  for(let t = t0+HOUR; t < END; t += HOUR){
    const cur = f(new Date(t));
    if(prev < 0 && cur >= 0){
      // 二分搜尋夾到 1 分鐘以內
      let lo = t - HOUR, hi = t;
      while(hi - lo > 60*1000){
        const mid = (lo + hi) / 2;
        if(f(new Date(mid)) < 0) lo = mid; else hi = mid;
      }
      return new Date(hi);
    }
    prev = cur;
  }
  return null;
}

function fmtFullDateTime(d){
  const w=["日","一","二","三","四","五","六"][d.getDay()];
  return `${d.getMonth()+1}/${d.getDate()} (週${w}) ${fmt(d)}`;
}
function countdown(from, to){
  const ms = to - from;
  if(ms < 0) return "";
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  if(days > 0) return `還有 ${days} 天 ${hours} 小時`;
  const mins = Math.floor((ms % 3600000) / 60000);
  return `還有 ${hours} 小時 ${mins} 分`;
}

// SVG 月面：用兩段弧線組合，終止線寬度隨相位變化
function moonSVG(phase){
  const R=34,cx=40,cy=40;
  const dark="#221a36",lit="#f4ecd0",stroke="#3a2f52";
  // 終止線：以 cos 控制橢圓半寬，phase 0/1=新月(全暗),0.5=滿月(全亮)
  const cosA=Math.cos(phase*2*Math.PI); // 1@新月, -1@滿月
  const rx=R*cosA;                       // 橢圓橫向半徑(可負)
  const litRight=phase<0.5;              // 漸盈→右側亮（北半球）
  // 外緣半圓固定，內側橢圓弧依 rx 決定凹凸
  const outerSweep=litRight?0:1;
  const innerSweep=rx>0?(litRight?1:0):(litRight?0:1);
  const path=`M ${cx} ${cy-R}
    A ${R} ${R} 0 0 ${litRight?1:0} ${cx} ${cy+R}
    A ${Math.abs(rx)} ${R} 0 0 ${innerSweep} ${cx} ${cy-R} Z`;
  return `<svg width="80" height="80" viewBox="0 0 80 80">
    <circle cx="${cx}" cy="${cy}" r="${R}" fill="${dark}" stroke="${stroke}" stroke-width="1.5"/>
    <path d="${path}" fill="${lit}"/>
    <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${stroke}" stroke-width="1.5"/>
  </svg>`;
}


// 找下一次「目標相位」的日期。用 cross-over 法避免被下個週期的相位搶走。
// target: 'full' 滿月(phase 越過 0.5) | 'new' 新月(phase 從接近 1 跳到 0)
function findNextPhaseDay(startDate, target){
  let prev=null;
  for(let i=0;i<=35;i++){
    const d=new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+i,12,0,0);
    const p=SunCalc.getMoonIllumination(d).phase;
    if(prev){
      if(target==='full' && prev.p<0.5 && p>=0.5){
        // phase 上升越過 0.5，取兩天中較接近 0.5 的那天
        return Math.abs(prev.p-0.5)<Math.abs(p-0.5) ? prev.d : d;
      }
      if(target==='new' && prev.p>p){
        // phase 從 ~1 跳到 ~0（朔望月邊界），取 fraction 較小的那天
        const fa=(1-Math.cos(prev.p*2*Math.PI))/2;
        const fb=(1-Math.cos(p*2*Math.PI))/2;
        return fa<fb ? prev.d : d;
      }
    }
    prev={d,p};
  }
  return null;
}
function daysBetween(a,b){
  const da=new Date(a.getFullYear(),a.getMonth(),a.getDate());
  const db=new Date(b.getFullYear(),b.getMonth(),b.getDate());
  return Math.round((db-da)/86400000);
}
function nextMoonCards(today){
  const full=findNextPhaseDay(today,'full');
  const newm=findNextPhaseDay(today,'new');
  const fmtDay=d=>`${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,"0")}/${String(d.getDate()).padStart(2,"0")}`;
  const tag=n=>n===0?"就是今天":n===1?"明天":`還有 ${n} 天`;
  const fd=daysBetween(today,full), nd=daysBetween(today,newm);
  return `<div class="nextmoon">
    <div class="card">
      <div class="lbl">下次滿月</div>
      <div class="icon">🌕</div>
      <div class="d">${fmtDay(full)} ${WD[full.getDay()]}</div>
      <div class="dd">${tag(fd)}</div>
    </div>
    <div class="card">
      <div class="lbl">下次新月</div>
      <div class="icon">🌑</div>
      <div class="d">${fmtDay(newm)} ${WD[newm.getDay()]}</div>
      <div class="dd">${tag(nd)}</div>
    </div>
  </div>`;
}

function pick(lat,lng,place){state.lat=lat;state.lng=lng;state.place=place;
  document.getElementById("cityResults").innerHTML="";document.getElementById("city").value="";render();}

function render(){
  const out=document.getElementById("out");
  const moonBox=document.getElementById("moonBox");
  const sel=state.date;
  document.getElementById("dateLabel").innerHTML=
    `${sel.getFullYear()}/${String(sel.getMonth()+1).padStart(2,"0")}/${String(sel.getDate()).padStart(2,"0")}`+
    `<small>${WD[sel.getDay()]} · ${state.place||"未選位置"}</small>`;

  const mp=moonPhase(sel);
  moonBox.innerHTML=`<div class="moon">
    ${moonSVG(mp.phase)}
    <div class="mtext">
      <b>${mp.name}</b>
      照度 ${mp.illum}% · 月齡 ${mp.age.toFixed(1)} 天 · ${mp.waxing?"漸盈":"漸虧"}
    </div>
  </div>`;
  document.getElementById("nextMoonBox").innerHTML = nextMoonCards(sel);

  if(state.lat===null){out.innerHTML=`<div class="hint">先搜尋城市或點下方常用城市，即可顯示行星時刻。</div>`;return;}
  const today=sunTimes(sel,state.lat,state.lng);
  if(today.polar){
    out.innerHTML=`<div class="err">該日此地為${today.polar==="day"?"極晝":"極夜"}，無法以標準日出日落法計算行星時。</div>`;return;
  }
  const tmr=new Date(sel);tmr.setDate(tmr.getDate()+1);
  const t=sunTimes(tmr,state.lat,state.lng);
  if(t.polar){out.innerHTML=`<div class="err">隔日為極晝/極夜，夜間時無法計算。</div>`;return;}
  const dayStart=today.sunrise,dayEnd=today.sunset;
  const nightStart=today.sunset,nightEnd=t.sunrise;
  const dayLen=(dayEnd-dayStart)/12,nightLen=(nightEnd-nightStart)/12;
  const ruler=DAY_RULER[sel.getDay()];
  let idx=CHALDEAN.indexOf(ruler);
  const hours=[];
  for(let i=0;i<12;i++){
    hours.push({planet:CHALDEAN[idx%7],n:i+1,night:false,
      start:new Date(dayStart.getTime()+i*dayLen),end:new Date(dayStart.getTime()+(i+1)*dayLen)});idx++;
  }
  for(let i=0;i<12;i++){
    hours.push({planet:CHALDEAN[idx%7],n:i+1,night:true,
      start:new Date(nightStart.getTime()+i*nightLen),end:new Date(nightStart.getTime()+(i+1)*nightLen)});idx++;
  }
  const now=new Date();
  const ri=INFO[ruler];
  let html=`<div class="meta">
    位置：<b>${state.place}</b> (${state.lat.toFixed(3)}, ${state.lng.toFixed(3)})<br>
    日出：<b>${fmt(dayStart)}</b> &nbsp; 日落：<b>${fmt(dayEnd)}</b><br>
    主管行星：<span class="ruler">${ri.glyph} ${ri.zh}日 (${ruler})</span>
  </div>`;
  let lastNight=null;
  hours.forEach(h=>{
    const live=now>=h.start&&now<h.end;
    if(h.night!==lastNight){
      html+=`<div class="sec">${h.night?"夜間時 · Hours of Night":"白晝時 · Hours of Day"}</div>`;
      lastNight=h.night;
    }
    const ii=INFO[h.planet];
    html+=`<div class="row ${live?"now":""} ${h.night?"night":""}">
      <div class="glyph">${ii.glyph}</div>
      <div class="name">${ii.zh}<small>${h.planet} · 第 ${h.n} 時${live?" · 現在":""}</small></div>
      <div class="time">${fmt(h.start)}<br>${fmt(h.end)}</div>
    </div>`;
  });
  out.innerHTML=html;
}
function setDateInput(){
  const d=state.date;
  document.getElementById("date").value=
    `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function renderChips(){
  document.getElementById("chips").innerHTML=PRESETS.map(c=>
    `<span class="chip" data-lat="${c.lat}" data-lng="${c.lng}" data-zh="${c.zh}">${c.zh}</span>`).join("");
  document.querySelectorAll(".chip").forEach(c=>c.onclick=()=>
    pick(parseFloat(c.dataset.lat),parseFloat(c.dataset.lng),c.dataset.zh));
}
async function searchCity(){
  let q=document.getElementById("city").value.trim();
  const box=document.getElementById("cityResults");
  if(!q){box.innerHTML="";return;}
  box.innerHTML=`<div class="hint">搜尋中…</div>`;
  const cleaned=q.replace(/[市縣区區県都府]$/,"");
  const tries=[q]; if(cleaned!==q)tries.push(cleaned);
  for(const term of tries){
    try{
      const url=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(term)}&count=6&language=zh`;
      const r=await fetch(url);
      const j=await r.json();
      if(j.results&&j.results.length){
        box.innerHTML=`<div class="results">`+j.results.map(c=>{
          const label=[c.name,c.admin1,c.country].filter(Boolean).join(", ");
          return `<div class="opt" data-lat="${c.latitude}" data-lng="${c.longitude}" data-label="${label.replace(/"/g,"")}">
            ${c.name}<small>${[c.admin1,c.country].filter(Boolean).join(" · ")}</small></div>`;
        }).join("")+`</div>`;
        box.querySelectorAll(".opt").forEach(o=>o.onclick=()=>
          pick(parseFloat(o.dataset.lat),parseFloat(o.dataset.lng),o.dataset.label));
        return;
      }
    }catch(e){}
  }
  const hit=PRESETS.find(p=>p.zh.includes(cleaned)||cleaned.includes(p.zh));
  if(hit){pick(hit.lat,hit.lng,hit.zh);return;}
  box.innerHTML=`<div class="err">找不到「${q}」，或此預覽環境網路受限。<br>請改用下方常用城市，或部署後在自己的網站使用完整搜尋。</div>`;
}
document.getElementById("search").onclick=searchCity;
document.getElementById("city").addEventListener("keydown",e=>{if(e.key==="Enter")searchCity();});
document.getElementById("date").onchange=e=>{
  const p=e.target.value.split("-").map(Number);
  if(p[0]){state.date=new Date(p[0],p[1]-1,p[2]);render();}
};
document.getElementById("prev").onclick=()=>{state.date.setDate(state.date.getDate()-1);setDateInput();render();};
document.getElementById("next").onclick=()=>{state.date.setDate(state.date.getDate()+1);setDateInput();render();};
document.getElementById("locBtn").onclick=()=>{
  const box=document.getElementById("cityResults");
  if(!navigator.geolocation){box.innerHTML=`<div class="err">此瀏覽器不支援定位。</div>`;return;}
  box.innerHTML=`<div class="hint">定位中…</div>`;
  navigator.geolocation.getCurrentPosition(
    p=>{pick(p.coords.latitude,p.coords.longitude,"我的位置");},
    e=>{box.innerHTML=`<div class="err">無法取得位置：${e.message}<br>（此預覽 iframe 禁用定位，部署到你的網站後即可正常使用。）</div>`;},
    {enableHighAccuracy:false,timeout:10000}
  );
};
renderChips();
setDateInput();
render();
</script>
</div>

<script>
/* === SunCalc 1.9.0 內嵌版 (c) 2011-2015 Vladimir Agafonkin, BSD License === */
/*
 (c) 2011-2015, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun/moon position and light phases.
 https://github.com/mourner/suncalc
*/

(function () { 'use strict';

// shortcuts for easier to read formulas

var PI   = Math.PI,
    sin  = Math.sin,
    cos  = Math.cos,
    tan  = Math.tan,
    asin = Math.asin,
    atan = Math.atan2,
    acos = Math.acos,
    rad  = PI / 180;

// sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas


// date/time constants and conversions

var dayMs = 1000 * 60 * 60 * 24,
    J1970 = 2440588,
    J2000 = 2451545;

function toJulian(date) { return date.valueOf() / dayMs - 0.5 + J1970; }
function fromJulian(j)  { return new Date((j + 0.5 - J1970) * dayMs); }
function toDays(date)   { return toJulian(date) - J2000; }


// general calculations for position

var e = rad * 23.4397; // obliquity of the Earth

function rightAscension(l, b) { return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l)); }
function declination(l, b)    { return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l)); }

function azimuth(H, phi, dec)  { return atan(sin(H), cos(H) * sin(phi) - tan(dec) * cos(phi)); }
function altitude(H, phi, dec) { return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(H)); }

function siderealTime(d, lw) { return rad * (280.16 + 360.9856235 * d) - lw; }

function astroRefraction(h) {
    if (h < 0) // the following formula works for positive altitudes only.
        h = 0; // if h = -0.08901179 a div/0 would occur.

    // formula 16.4 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
    // 1.02 / tan(h + 10.26 / (h + 5.10)) h in degrees, result in arc minutes -> converted to rad:
    return 0.0002967 / Math.tan(h + 0.00312536 / (h + 0.08901179));
}

// general sun calculations

function solarMeanAnomaly(d) { return rad * (357.5291 + 0.98560028 * d); }

function eclipticLongitude(M) {

    var C = rad * (1.9148 * sin(M) + 0.02 * sin(2 * M) + 0.0003 * sin(3 * M)), // equation of center
        P = rad * 102.9372; // perihelion of the Earth

    return M + C + P + PI;
}

function sunCoords(d) {

    var M = solarMeanAnomaly(d),
        L = eclipticLongitude(M);

    return {
        dec: declination(L, 0),
        ra: rightAscension(L, 0)
    };
}


var SunCalc = {};


// calculates sun position for a given date and latitude/longitude

SunCalc.getPosition = function (date, lat, lng) {

    var lw  = rad * -lng,
        phi = rad * lat,
        d   = toDays(date),

        c  = sunCoords(d),
        H  = siderealTime(d, lw) - c.ra;

    return {
        azimuth: azimuth(H, phi, c.dec),
        altitude: altitude(H, phi, c.dec)
    };
};


// sun times configuration (angle, morning name, evening name)

var times = SunCalc.times = [
    [-0.833, 'sunrise',       'sunset'      ],
    [  -0.3, 'sunriseEnd',    'sunsetStart' ],
    [    -6, 'dawn',          'dusk'        ],
    [   -12, 'nauticalDawn',  'nauticalDusk'],
    [   -18, 'nightEnd',      'night'       ],
    [     6, 'goldenHourEnd', 'goldenHour'  ]
];

// adds a custom time to the times config

SunCalc.addTime = function (angle, riseName, setName) {
    times.push([angle, riseName, setName]);
};


// calculations for sun times

var J0 = 0.0009;

function julianCycle(d, lw) { return Math.round(d - J0 - lw / (2 * PI)); }

function approxTransit(Ht, lw, n) { return J0 + (Ht + lw) / (2 * PI) + n; }
function solarTransitJ(ds, M, L)  { return J2000 + ds + 0.0053 * sin(M) - 0.0069 * sin(2 * L); }

function hourAngle(h, phi, d) { return acos((sin(h) - sin(phi) * sin(d)) / (cos(phi) * cos(d))); }
function observerAngle(height) { return -2.076 * Math.sqrt(height) / 60; }

// returns set time for the given sun altitude
function getSetJ(h, lw, phi, dec, n, M, L) {

    var w = hourAngle(h, phi, dec),
        a = approxTransit(w, lw, n);
    return solarTransitJ(a, M, L);
}


// calculates sun times for a given date, latitude/longitude, and, optionally,
// the observer height (in meters) relative to the horizon

SunCalc.getTimes = function (date, lat, lng, height) {

    height = height || 0;

    var lw = rad * -lng,
        phi = rad * lat,

        dh = observerAngle(height),

        d = toDays(date),
        n = julianCycle(d, lw),
        ds = approxTransit(0, lw, n),

        M = solarMeanAnomaly(ds),
        L = eclipticLongitude(M),
        dec = declination(L, 0),

        Jnoon = solarTransitJ(ds, M, L),

        i, len, time, h0, Jset, Jrise;


    var result = {
        solarNoon: fromJulian(Jnoon),
        nadir: fromJulian(Jnoon - 0.5)
    };

    for (i = 0, len = times.length; i < len; i += 1) {
        time = times[i];
        h0 = (time[0] + dh) * rad;

        Jset = getSetJ(h0, lw, phi, dec, n, M, L);
        Jrise = Jnoon - (Jset - Jnoon);

        result[time[1]] = fromJulian(Jrise);
        result[time[2]] = fromJulian(Jset);
    }

    return result;
};


// moon calculations, based on http://aa.quae.nl/en/reken/hemelpositie.html formulas

function moonCoords(d) { // geocentric ecliptic coordinates of the moon

    var L = rad * (218.316 + 13.176396 * d), // ecliptic longitude
        M = rad * (134.963 + 13.064993 * d), // mean anomaly
        F = rad * (93.272 + 13.229350 * d),  // mean distance

        l  = L + rad * 6.289 * sin(M), // longitude
        b  = rad * 5.128 * sin(F),     // latitude
        dt = 385001 - 20905 * cos(M);  // distance to the moon in km

    return {
        ra: rightAscension(l, b),
        dec: declination(l, b),
        dist: dt
    };
}

SunCalc.getMoonPosition = function (date, lat, lng) {

    var lw  = rad * -lng,
        phi = rad * lat,
        d   = toDays(date),

        c = moonCoords(d),
        H = siderealTime(d, lw) - c.ra,
        h = altitude(H, phi, c.dec),
        // formula 14.1 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
        pa = atan(sin(H), tan(phi) * cos(c.dec) - sin(c.dec) * cos(H));

    h = h + astroRefraction(h); // altitude correction for refraction

    return {
        azimuth: azimuth(H, phi, c.dec),
        altitude: h,
        distance: c.dist,
        parallacticAngle: pa
    };
};


// calculations for illumination parameters of the moon,
// based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
// Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.

SunCalc.getMoonIllumination = function (date) {

    var d = toDays(date || new Date()),
        s = sunCoords(d),
        m = moonCoords(d),

        sdist = 149598000, // distance from Earth to Sun in km

        phi = acos(sin(s.dec) * sin(m.dec) + cos(s.dec) * cos(m.dec) * cos(s.ra - m.ra)),
        inc = atan(sdist * sin(phi), m.dist - sdist * cos(phi)),
        angle = atan(cos(s.dec) * sin(s.ra - m.ra), sin(s.dec) * cos(m.dec) -
                cos(s.dec) * sin(m.dec) * cos(s.ra - m.ra));

    return {
        fraction: (1 + cos(inc)) / 2,
        phase: 0.5 + 0.5 * inc * (angle < 0 ? -1 : 1) / Math.PI,
        angle: angle
    };
};


function hoursLater(date, h) {
    return new Date(date.valueOf() + h * dayMs / 24);
}

// calculations for moon rise/set times are based on http://www.stargazing.net/kepler/moonrise.html article

SunCalc.getMoonTimes = function (date, lat, lng, inUTC) {
    var t = new Date(date);
    if (inUTC) t.setUTCHours(0, 0, 0, 0);
    else t.setHours(0, 0, 0, 0);

    var hc = 0.133 * rad,
        h0 = SunCalc.getMoonPosition(t, lat, lng).altitude - hc,
        h1, h2, rise, set, a, b, xe, ye, d, roots, x1, x2, dx;

    // go in 2-hour chunks, each time seeing if a 3-point quadratic curve crosses zero (which means rise or set)
    for (var i = 1; i <= 24; i += 2) {
        h1 = SunCalc.getMoonPosition(hoursLater(t, i), lat, lng).altitude - hc;
        h2 = SunCalc.getMoonPosition(hoursLater(t, i + 1), lat, lng).altitude - hc;

        a = (h0 + h2) / 2 - h1;
        b = (h2 - h0) / 2;
        xe = -b / (2 * a);
        ye = (a * xe + b) * xe + h1;
        d = b * b - 4 * a * h1;
        roots = 0;

        if (d >= 0) {
            dx = Math.sqrt(d) / (Math.abs(a) * 2);
            x1 = xe - dx;
            x2 = xe + dx;
            if (Math.abs(x1) <= 1) roots++;
            if (Math.abs(x2) <= 1) roots++;
            if (x1 < -1) x1 = x2;
        }

        if (roots === 1) {
            if (h0 < 0) rise = i + x1;
            else set = i + x1;

        } else if (roots === 2) {
            rise = i + (ye < 0 ? x2 : x1);
            set = i + (ye < 0 ? x1 : x2);
        }

        if (rise && set) break;

        h0 = h2;
    }

    var result = {};

    if (rise) result.rise = hoursLater(t, rise);
    if (set) result.set = hoursLater(t, set);

    if (!rise && !set) result[ye > 0 ? 'alwaysUp' : 'alwaysDown'] = true;

    return result;
};


// export as Node module / AMD module / browser variable
if (typeof exports === 'object' && typeof module !== 'undefined') module.exports = SunCalc;
else if (typeof define === 'function' && define.amd) define(SunCalc);
else window.SunCalc = SunCalc;

}());
</script>
{% endraw %}

{% include google-ad-bottom.html %}
