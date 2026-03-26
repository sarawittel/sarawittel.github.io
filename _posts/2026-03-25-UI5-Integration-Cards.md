---
layout: post
title: "SAP UI5 Integration Cards: something I didn’t expect to enjoy 😄"
discussion_number: 2
date: 2026-03-25
categories: [Business Technology Platform, UI5]
excerpt: "In this post, we’ll explore what UI5 Integration Cards are, why they matter, and how you can start using them effectively"
tags:
  [
    SAP UI5,
    UI5 Integration Cards,
    SAP Work Zone,
    SAP Fiori,
    UI5 development,
    SAP BTP,
    SAP dashboards,
    OData UI5,
    SAP frontend,
    SAP UX,
  ]
---

Let me start with a confession: **I’m not a UI person**.

I’ve always felt more comfortable working on logic, backend, integrations… everything that happens “behind the scenes”. But recently I had to play a bit with **UI5 Integration Cards**, and honestly… I was quite surprised.

## 🤔 What are Integration Cards?

UI5 Integration Cards are reusable UI components designed to display content in a compact and structured way. Think of them as **mini-applications**.
They are mainly defined through a `manifest.json` and can consume data from APIs, OData services, JSON, etc.

So far, nothing too mind-blowing… but here’s the interesting part.

![ui5_integration_cards]({{ site.baseurl }}/assets/images/ui-cards-launchpad.png)

I was expecting something tedious, a lot of code, endless UI tweaks… you know, the usual when you’re not into frontend. But no, **creating a card is surprisingly easy**

Honestly, in a very short time you can have something functional that already looks quite professional.

## ⚠️ The downside (from my perspective)

In practice, **SAP Business Application Studio** tends to be required. While many developers (myself included) are more comfortable working in VS Code, the reality is that when you work with UI5 Integration Cards, you rely on Business Application Studio.

## Let's dive into cards configuration

- Create a new project from template and select **UI Integration Card**
- You just need to inform the title, the type of the card...
- And the card will be automatically generated, you will have your card preview with mocked data.

![ui5_integration_cards]({{ site.baseurl }}/assets/images/Screenshot 2026-03-26 at 09.40.12.png)

### OData Service

Now let's see what we can do with this, first I would like to connect this card with an OData (for sure this is something that we would do on each cards, otherwise it won't make sense at all to have it 😂).

- Create destination at subaccount level (I'm using Northwind: https://services.odata.org/V2/Northwind/Northwind.svc/)
- If it's not opened, right click on manifes.json>UI Integration Card: Edit option
- Click on add destination

![ui5_integration_cards]({{ site.baseurl }}/assets/images/Screenshot 2026-03-26 at 14.26.00.png)

- In Data Configuration (Card) I will add the following `{{destinations.Northwind}}/Orders?$orderby=OrderDate%20desc&$top=10&$expand=Order_Details`

  ![ui5_integration_cards]({{ site.baseurl }}/assets/images/Screenshot 2026-03-26 at 17.28.13.png)

- What is important here is of course the URL but also Data Path for JSON Root

  ![ui5_integration_cards]({{ site.baseurl }}/assets/images/SCR-20260326-pirt.png)

- Then you just need to configure the column by adding Value `{OrderUD}` for example. You can also access to expanded attributes with `{Order_Details/results/0/UnitPrice}`

- Let's put a little bit of formatting, for example add in Item Highlight `{= ${Order_Details/results/0/UnitPrice} < 30 ? 'Success': 'Warning'}`

### Header

There are 2 types of header

- Default header
- Numeric header, numeric header allows you to add numeric information in the header (like a KPI)

So let's configure a KPI for the header, you just need to go to Data Configuration (Header) and add there the request URL: `{{destinations.Northwind}}/Orders/$count`

In Card Header Configuration let's add the following:
![ui5_integration_cards]({{ site.baseurl }}/assets/images/Screenshot 2026-03-26 at 17.58.44.png)

![ui5_integration_cards]({{ site.baseurl }}/assets/images/Screenshot 2026-03-26 at 17.59.42.png)

Now let's play a little bit more and add a side indicator in the header.

![ui5_integration_cards]({{ site.baseurl }}/assets/images/Screenshot 2026-03-26 at 18.14.07.png)

**States should be added by hand** since the editor doesn't allow it:

```json
{
  "sideIndicators": [
    {
      "title": "Target",
      "number": 200,
      "state": "Good",
      "unit": "Orders"
    },
    {
      "title": "Deviation",
      "number": "{= ${} - 200}",
      "state": "{= ${} < 200 ? 'Good' : 'Critical'}"
    }
  ]
}
```

Let's go further and add an image in the header, you just need to:

- Create a new forder called `images` and add there the image you want to load
- In the `manifest.json` add the following:

```json
{
  "icon": {
    "src": "./images/avatar.jpg"
  }
}
```

And voilá
![ui5_integration_cards]({{ site.baseurl }}/assets/images/Screenshot 2026-03-26 at 18.24.40.png)

### Filtering

#### Search

Let's add some search in the header so we can look for some orders.

- In General Configuration>Add: Filter and add `searchShip` and type `Search`
- After that you would need to indicate the filter you would use, under Data Configuration (Card)>Data Request Paramters just add the filter key `$filter` and value `substringof('{filters>/searchShip/value}', ShipName) eq true` and that's all you can select in your list by ShipName

![ui5_integration_cards]({{ site.baseurl }}/assets/images/Screenshot 2026-03-26 at 19.02.47.png)

## 🧠 Final thoughts

I’m not saying I’ve become a frontend person now 😅
But I can definitely say that UI5 Integration Cards are a powerful and very accessible tool.

And most importantly: 👉 **with very little effort, you can build something that looks really good in SAP Work Zone**

Refer this for more information [UI5 Cards](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/index.html)
