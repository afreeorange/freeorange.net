#!/bin/bash

set -euo pipefail

pnpm check
pnpm build

aws s3 sync dist/ s3://freeorange.net/ --delete

aws cloudfront create-invalidation \
    --distribution-id "E3FCME8V9TWZZG" \
    --paths '/*' \
    --profile nikhil.io
