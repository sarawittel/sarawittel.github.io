---
layout: post
title: "The Moment I Stopped Feeling Like a Backend Dinosaur"
discussion_number: 2
date: 2026-02-11
categories: [Engineering, AI]
excerpt: "AI did not replace my engineering skills — it accelerated how I learn, integrate, and move across technologies."
tags: [blog, Artificial Intelligence, Developer Productivity]
---

I have always considered myself someone who enjoys innovation.

New technologies never intimidated me. I have spent years working comfortably in backend systems, structured environments, and enterprise logic — the kind of engineering where determinism matters and where understanding what happens under the hood is not optional. I value robustness. I value clarity. I value control.

And yet, when artificial intelligence began reshaping the engineering conversation, I felt something unexpected: distance.

Suddenly the discourse was no longer just about architecture patterns, performance optimization, or system reliability. It was about prompts, generative models, copilots, embeddings. It felt probabilistic. Uncertain. Almost imprecise.

For the first time in my career, I wondered whether I was becoming a dinosaur — a backend engineer in a world that was shifting faster than my mental model of it.

At first, I approached AI cautiously. GitHub Copilot became my entry point, but I treated it like a controlled experiment. I used it for small refactors, boilerplate, syntax completion. It accelerated repetitive tasks and reduced friction, but it didn’t fundamentally change how I thought.

The real shift came from friction.

I was building a plugin for SAP CAP. The objective was clear: extend the standard `cds.log`, intercept structured logs, serialize them, send them to an S3 bucket in AWS, and later inject them into an Elasticsearch platform for observability and analysis.

This time, there was a real knowledge gap.

I did not fully understand how to properly extend the standard `cds.log` behavior in CAP, nor did I know which abstraction layer was the right place to hook into. On top of that, I had never worked with `winston`, the Node.js logging library that ultimately became central to the solution. I knew what I wanted architecturally, but I lacked the concrete mechanisms to implement it cleanly and in a way that would remain maintainable.

Without AI, I would have likely navigated the traditional path: reading documentation in fragments, scanning blog posts, jumping between Stack Overflow threads, experimenting through trial and error. Eventually I would have arrived at a solution, but the process would have been scattered and time-consuming.

Instead, I described the goal conversationally: I wanted to extend CAP logging, structure it properly, push logs to S3, and later feed them into Elasticsearch. The AI introduced me to `winston`, explained the concept of logging transports, clarified how to decouple log generation from delivery, and helped me see that the clean solution was not about forcing `cds.log` to do more than it should, but about designing a structured logging layer around it.

What changed was not that I received ready-made code. What changed was the speed and cohesion of learning. The explanations were contextual, directly connected to my use case, and iterative. I could refine the question as my understanding improved, and the answers evolved with it. The knowledge gap closed faster, and more importantly, it closed in a structured way.

When the plugin finally worked — when logs flowed from the extended `cds.log` through a structured logger into S3 and eventually into Elasticsearch — the real achievement was not automation. It was accelerated comprehension.

The same pattern repeated itself when I built my blog, `sarawittel.github.io`. I had limited experience with GitHub Pages and no practical background deploying backends with Vercel. The ecosystem felt fragmented at first: configuration files, routing behavior, build pipelines, environment variables. There were again small but real knowledge gaps that prevented forward movement.

By asking structured questions and iterating deliberately, I was able to move through unfamiliar territory with far less friction than I would have experienced a few years ago. The blog did not appear magically. I still had to understand what I was doing. But the distance between “I don’t know how this works” and “I understand how this system behaves” was significantly shorter.

Even this article has been refined with AI. That does not make it less authentic. On the contrary, it highlights something subtle but important: in informal dialogue, ChatGPT can capture tone, intention, and nuance in a way that supports expression rather than replacing it. The ideas are mine, the experiences are mine, and the reflection is mine — but the articulation becomes sharper through interaction.

I still have a long way to go in understanding the full implications of artificial intelligence in software engineering. This is not a tool that one simply adopts and masters. It is an evolving layer in the way we think, learn, and build.

What feels clear to me, however, is that AI is not a temporary wave of enthusiasm. It represents a structural shift. The conversation about replacing developers often dominates headlines, but that framing misses the more immediate and practical question: how do we integrate AI into the way humans already work?

Before discussing automation at scale or workforce substitution, we need to understand collaboration. Engineering is not merely about producing code; it is about making decisions under constraints, designing systems that endure, and taking responsibility for long-term consequences. AI does not remove that responsibility. Instead, it reshapes the learning curve and expands the reachable surface area of exploration.

For developers like me, this means being able to move across technologies more fluidly, to explore ecosystems we have not formally mastered, and to close knowledge gaps with greater efficiency. The advantage is not that AI writes everything for us, but that it reduces the cost of experimentation and accelerates synthesis.

Perhaps the most interesting dimension of this relationship is that it is not passive. Every correction, every refinement of a prompt, every validation of an architectural suggestion feeds back into the system. We are not only consuming intelligence; we are participating in shaping it.

I no longer see artificial intelligence as hype, nor as a threat to my professional identity. I see it as cognitive acceleration — a tool that, when used critically and responsibly, expands how quickly and how broadly I can learn.

The backend dinosaur did not disappear.

It evolved — not by abandoning fundamentals, but by expanding how it learns.
