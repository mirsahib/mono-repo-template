# Stage 1: Build Stage
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the root package.json and turbo.json to leverage TurboRepo
COPY package.json turbo.json ./

# Copy the package.json and package-lock.json for the admin app
COPY apps/admin/package.json ./apps/admin/

# Copy the package.json for the ui package
COPY packages/ui/package.json ./packages/ui/

# Copy the package.json for eslint-config and typescript-config
COPY packages/eslint-config/package.json  ./packages/eslint-config/
COPY packages/typescript-config/package.json  ./packages/typescript-config/

# Install dependencies for the entire monorepo
RUN npm install --force

# Copy the rest of the monorepo code
COPY . .

# Build the eslint-config and typescript-config packages (if needed)
RUN npm run build --workspace=packages/eslint-config || true
RUN npm run build --workspace=packages/typescript-config || true

# Build the ui package
RUN npm run build --workspace=packages/ui || true

# Install specific versions of vite and rollup in the admin app
RUN cd apps/admin && npm install vite@3.2.5 rollup@2.79.0

# Build the admin app
RUN npm run build --workspace=apps/admin

# Stage 2: Runtime Stage
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install http-server globally to serve the static files
RUN npm install -g http-server

# Copy the built files from the builder stage
COPY --from=builder /app/apps/admin/dist ./apps/admin/dist

# Expose the port the app will run on
EXPOSE 3001

# Serve the built files using http-server
CMD ["http-server", "apps/admin/dist", "-p", "3001"]