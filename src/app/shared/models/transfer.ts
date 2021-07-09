export class Transfer {
  constructor(
       public fromAccount: string,
       public toAccount: string,
       public amount: string | number,
       ){}
}

export const source_account = {
	"id": "21498fba-fdf9-470c-a4b4-df3aff6ab293",
	"merchant": {
		"name": "My Personal Account",
		"accountNumber": ""
	},
	"dates": {
		"valueDate": "2021-07-09"
	},
	"categoryCode": "#1180aa",
	"transaction": {
		"type": "Online Transfer",
		"creditDebitIndicator": "DBIT",
		"amountCurrency": {
			"currencyCode": "EUR",
			"amount": "5824.76"
		}
	}
}
