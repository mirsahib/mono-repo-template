# Use the lightweight Python 3.8 image
FROM python:3.8-slim

# Install system dependencies required by Poetry and build tools
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
 && rm -rf /var/lib/apt/lists/*

# Install Poetry
ENV POETRY_VERSION=1.4.2
RUN curl -sSL https://install.python-poetry.org | python - --version $POETRY_VERSION

# Add Poetry to PATH
ENV PATH="/root/.local/bin:$PATH"

# Set the working directory
WORKDIR /app

# Copy the Poetry files
COPY ./apps/server/pyproject.toml /app/

# Install dependencies
RUN poetry config virtualenvs.create true \
 && poetry install --no-interaction --no-ansi

# Copy the application code
COPY . /app

# Expose the port FastAPI will run on
EXPOSE 8000

# Run the FastAPI application using Uvicorn
CMD ["uvicorn", "apps.server.main:app", "--host", "0.0.0.0", "--port", "8000"]
