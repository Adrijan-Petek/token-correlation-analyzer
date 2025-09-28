# Token Correlation Analyzer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

A powerful tool for analyzing correlations between cryptocurrency tokens. Generate correlation matrices and visualize them through a web interface.

![Correlation Matrix Visualization](https://via.placeholder.com/800x400?text=Correlation+Matrix+Example)

## Features

- **Correlation Analysis**: Compute correlation matrices for multiple tokens
- **JSON Reports**: Generate structured reports with timestamps
- **Web Interface**: Visualize correlation data in a clean web app
- **Sample Data**: Includes sample reports for testing
- **Easy Deployment**: Web app deployable to Vercel or similar platforms

## Installation

### Prerequisites
- Node.js >= 14.0.0
- npm or yarn

### Clone and Install
```bash
git clone https://github.com/yourusername/token-correlation-analyzer.git
cd token-correlation-analyzer

# Install main dependencies
npm install

# Install web dependencies
cd web
npm install
cd ..
```

## Usage

### CLI Tool
Generate a sample correlation report:
```bash
npm run correlate
```
This creates a report in the `reports/` directory.

### Web Interface
Start the development server:
```bash
cd web
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the correlation matrix.

### Production Build
```bash
cd web
npm run build
npm start
```

## Project Structure

```
token-correlation-analyzer/
├── config/
│   └── tokens.json          # Token configuration
├── sample_reports/
│   └── report-sample.json   # Sample correlation data
├── src/
│   └── correlate.js         # Main correlation script
├── web/
│   ├── pages/
│   │   └── index.js         # Web app homepage
│   ├── package.json         # Web dependencies
│   └── vercel.json          # Vercel deployment config
└── package.json             # Main project config
```

## API Reference

### Correlation Report Format
```json
{
  "date": "2023-10-01",
  "tokens": ["BTC", "ETH", "USDC", "SOL"],
  "correlation_matrix": [
    [1, 0.85, -0.02, 0.55],
    [0.85, 1, -0.01, 0.48],
    [-0.02, -0.01, 1, 0],
    [0.55, 0.48, 0, 1]
  ],
  "timestamp": "2023-10-01T00:00:00.000Z"
}
```

## Deployment

### Vercel
The web app is configured for easy deployment to Vercel:
```bash
cd web
vercel --prod
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


