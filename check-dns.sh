#!/bin/bash
# Checks whether the three Resend DNS records for askworx.in have propagated.
# Run: ./check-dns.sh
D=askworx.in
ok=0

check() {
  local label="$1" type="$2" host="$3" expect="$4"
  local got
  got=$(dig +short "$type" "$host" @8.8.8.8 | tr -d '"' | tr -d '\n')
  if [ -z "$got" ]; then
    printf "  ✗ %-22s not found yet\n" "$label"
  elif [[ "$got" == *"$expect"* ]]; then
    printf "  ✓ %-22s ok\n" "$label"; ok=$((ok+1))
  else
    printf "  ✗ %-22s got: %s\n" "$label" "${got:0:60}"
  fi
}

echo "Resend DNS check for $D"
check "TXT resend._domainkey" TXT   "resend._domainkey.$D" "p=MIGfMA0GCS"
check "CNAME send"            CNAME "send.$D"              "send.forge.rmta.net"
check "CNAME rsend"           CNAME "rsend.$D"             "rsend-apne1.forge.rmta.net"

echo
if [ "$ok" -eq 3 ]; then
  echo "All 3 records live → click Verify DNS Records at resend.com/domains"
else
  echo "$ok/3 live. DNS can take 15-60 min on BigRock. Re-run this later."
fi
