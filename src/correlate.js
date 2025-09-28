require('dotenv').config();
const fs = require('fs');
const path = require('path');

const REPORTS_DIR = path.join(__dirname,'..','reports');
if(!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR,{recursive:true});

const tokens = ["BTC","ETH","USDC","SOL"];
const matrix=[[1,0.85,-0.02,0.55],[0.85,1,-0.01,0.48],[-0.02,-0.01,1,0],[0.55,0.48,0,1]];
const report={date:new Date().toISOString().slice(0,10),tokens,correlation_matrix:matrix,timestamp:new Date().toISOString()};
fs.writeFileSync(path.join(REPORTS_DIR,`report-${report.date}.json`),JSON.stringify(report,null,2));
console.log('Sample correlation report written.');
