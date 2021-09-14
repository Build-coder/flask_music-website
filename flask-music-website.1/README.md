# Create virtual environment
python3 -m venv env

# Activate virtual environment
source env/bin/activate

# Set up development mode
export FLASK_ENV=development
flask run