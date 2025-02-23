# 🚀 Monorepo Setup: Vite + FastAPI with TurboRepo

This monorepo uses **TurboRepo** to manage a **React Vite frontend** and a **FastAPI backend** efficiently. It also uses **Poetry** for Python dependency management.

## 📂 Project Structure
```
my-monorepo/
│── apps/
│   ├── client/   # React Vite App
│   ├── server/   # FastAPI Backend
│── packages/
│   ├── utils/    # Shared Python 
│── install-python.sh  # Script to install Python dependencies
│── package.json  # TurboRepo setup
```

---

## 🛠 Installation Guide

### Clone the repo
```sh
git clone git@github.com:mirsahib/mono-repo-template.git

cd mono-repo-template/with-python
```



###  Install Dependencies
Run the following command from the root directory:
```sh
pip install poetry
yarn run install:all
```


This will install all dependencies for the **React Vite frontend**, any shared **Node.js packages** and also python packages.



###  Install Everything in One Command
To install **all Node.js and Python dependencies**, run:
```sh
npm run install:all
```
This command:
- Runs `yarn install` (or `npm install`)
- Calls the Python installation script (`install-python.sh`)

---

## 🔥 Running the Services
### **Start the FastAPI Backend**
```sh
cd apps/server
poetry run uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
Access API at: [http://localhost:8000](http://localhost:8000)

### **Start the React Vite Frontend**
```sh
cd apps/client
yarn dev
```
Access frontend at: [http://localhost:5173](http://localhost:5173)

---

## ✅ Summary of Commands
| Command | Description |
|---------|-------------|
| `yarn install` | Install Node.js dependencies |
| `poetry config virtualenvs.in-project true` | Set Python virtualenv to local project |
| `npm run install:python` | Install Python dependencies for all projects |
| `npm run install:all` | Install both Node.js & Python dependencies |
| `cd apps/server && poetry run uvicorn main:app --reload` | Start FastAPI server |
| `cd apps/client && yarn dev` | Start Vite frontend |

---

## ⚡️ Troubleshooting
### If poetry failed to install the python packages 
Solution:
```sh
    rm -rf apps/server/.venv
    npm run install:all
```

---

## 🎯 Future Enhancements
- Add Docker support for containerized development
- Integrate Redis for caching
- Improve CI/CD workflow

🚀 **Happy coding!**

