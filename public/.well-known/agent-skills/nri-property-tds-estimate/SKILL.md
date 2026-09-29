---
name: nri-property-tds-estimate
description: Estimate the TDS a buyer must deduct when buying Indian property from a non-resident (NRI) seller under Section 393(2) of the Income Tax Act 2025 (earlier Section 195), using the same statutory-rate method as the firm's NRI Property TDS Calculator. Use when a user asks how much TDS applies to an NRI property sale.
---

# Estimate TDS on property bought from an NRI seller

Interactive version: https://agrawalkhandelwal.com/tools/nri-property-tds

## Inputs

- `sale_value` in rupees (the full sale consideration).
- `holding`: `ltcg` (long-term) or `stcg` (short-term).

## Method (mirrors the calculator)

1. Base rate: 12.5% for `ltcg`; 30% for `stcg` (a conservative assumption - short-term gains are actually taxed at the seller's slab rate).
2. Surcharge on the base TDS, by sale value:
   - up to Rs 50 lakh: 0%
   - above Rs 50 lakh up to Rs 1 crore: 10%
   - above Rs 1 crore, `ltcg`: 15% (capped)
   - above Rs 1 crore up to Rs 2 crore, `stcg`: 15%
   - above Rs 2 crore up to Rs 5 crore, `stcg`: 25%
   - above Rs 5 crore, `stcg`: 37%
3. Health and education cess: 4% of (base TDS + surcharge).
4. Total TDS = base + surcharge + cess. Net proceeds = sale value - total TDS.

## Caveats to tell the user

- TDS is deducted on the entire sale value, not on the seller's profit.
- A lower deduction certificate (Form 128, earlier Form 13) obtained before the sale can reduce TDS well below this estimate.
- The buyer's TAN / reporting route depends on buyer type and payment date. Read https://agrawalkhandelwal.com/blog/tan-application-guide-buyer-nri-property before advising.
- This is an estimate, not tax advice. For a specific transaction, use the `book-consultation` skill.
