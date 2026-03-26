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

## 🧠 Final thoughts

I’m not saying I’ve become a frontend person now 😅
But I can definitely say that UI5 Integration Cards are a powerful and very accessible tool.

And most importantly: 👉 **with very little effort, you can build something that looks really good in SAP Work Zone**

Refer this for more information [UI5 Cards](https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/index.html)
