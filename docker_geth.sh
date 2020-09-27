#!/bin/bash -xe

docker run -ti --rm --name geth -p 8545:8545 ethereum/client-go:release-1.9 \
  --nousb --miner.gastarget 10000000 \
  --http --http.vhosts '*,localhost,host.docker.internal' \
  --http.corsdomain '*' --http.addr "0.0.0.0" \
  --dev --nodiscover --maxpeers 0 --mine --miner.threads 1 --verbosity 3 \
  --networkid 1337
