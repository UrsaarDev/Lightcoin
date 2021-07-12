import request from "../../../lib/fetch";
import { NextApiRequest, NextApiResponse } from "next";
import { dbQuery } from "../../../lib/query";
import gql from "graphql-tag";

export default function PricingCronJob(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return request("https://api.clucoin.com/v1/data/price", {})
    .then((data) => {
      const {
        data: {
          pcs: { usd, bnb },
        },
      } = data;
      return dbQuery({
        query: gql`
          mutation insertPriceData($object: price_insert_input!) {
            insert_price_one(object: $object) {
              timestamp
            }
          }
        `.loc.source.body,
        variables: {
          object: {
            usd,
            bnb,
          },
        },
      })
        .then((data) => {
          console.log(data);
          return res.json({ ok: true });
        })
        .catch((err: any) => {
          console.log("ERR: Inserting");
          return res.json({ ok: false, err });
        });
    })
    .catch((err: any) => {
      console.log("ERR: Querying");
      return res.json({ ok: false, err });
    });
}
