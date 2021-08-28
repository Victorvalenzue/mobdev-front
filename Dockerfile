FROM node:lts as dependencies

LABEL version="1.0"
LABEL description="This is the base docker image for the front project"
LABEL maintainer = ["victorvalenzuelavr@gmail.com"]

WORKDIR /front
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /front
COPY . .
COPY --from=dependencies /front/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /front
ENV NODE_ENV production

COPY --from=builder /front/public ./public
COPY --from=builder /front/.next ./.next
COPY --from=builder /front/node_modules ./node_modules
COPY --from=builder /front/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]