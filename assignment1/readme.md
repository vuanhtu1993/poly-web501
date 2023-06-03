1. npm install -g json-server concurrently
2. package.json
```
"dev": "vite",
->
"dev": "concurrently \"vite\" \"json-server -w db.json\"",
```
3. Chay cau lenh "npm run dev"