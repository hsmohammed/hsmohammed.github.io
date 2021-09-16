---
abstract: Understanding and modeling cyclist movement patterns is an essential step in developing agent- based microsimulation models. The aim of this study is to infer how cyclists in following interactions weigh different state features, such as relative distances and speeds, when making guidance decisions. Cyclist guidance decisions are modeled as a continuous state and action Markov Decision Process (MPD). Two Inverse Reinforcement Learning (IRL) algorithms are evaluated to estimate the MPD reward function in a linear form based on Maximum Entropy (ME) and in a nonlinear form based on Gaussian Processes (GP). The algorithms are trained on 856 cyclist trajectories in following interactions extracted from video data using computer vision, and then validated using a separate set of 172 trajectories. The estimated reward functions imply cyclist preferences for low lateral distances, path deviations, speed differences, accelerations and direction angles, but high longitudinal distances from leading cyclists. The mean and variance of the reward function learned using GP can be applied to simulate heterogeneous cyclist preferences and behavior. Predicted trajectories based on Q-learning with the linear and non-linear reward functions are compared to the validation data. This research is a fundamental step toward developing operational bicycle traffic microsimulation models with applications such as facility planning and bicycle safety modeling. Key novel aspects are the investigation of continuous, non- linear, and stochastic reward functions for cyclist agents using real-world observational data.
authors:
- admin
- Alexander Bigazzi
- Tarek Sayed
date: "2021-12-07T00:00:00Z"
doi: ""
featured: true
image:
  caption: ''
  focal_point: ""
  preview_only: false
links:
projects:
publication: ""
publication_short: ""
publication_types:
- "3"
publishDate: "2021-12-07T00:00:00Z"
slides: example
summary: Accurate modeling of bicycles in traffic calls for taking into account individualistic actions and behavioural schemes in different scenarios. Bicycle traffic is characterized by possessing significant unobserved heterogeneity, with the differences between individual cyclists driving how cyclists behave as a group. A Generative Variational Autoencoder-based model is developed to serve for two purposes. First, the encoder part summarizes the individual differences between unconstrained cyclists to a more compact latent dimension layer. Second, a decoder part where a trajectory is reconstructed using only coordinates of that compact latent layer. Different groups representing different styles of cyclists are identified using Gaussian mixture model (GMM) clustering. The model proved high reconstruction accuracy with a root mean square error of about 0.32 meters. Latent variables were clustered into four classes representing different styles of cyclists. When reflecting the clustering results on motion variables, such as speed, acceleration, jerk and directions angles, were shown to produce clearly different distributions. The model and results could help elevating the accuracy of bicycle microsimulation models and gain deeper understanding on the heterogeneity in bicycle traffic behaviour.
tags:
- Source Themes
title: Inferring Nonlinear Reward Functions for Cyclists in Following Interactions Using Continuous Inverse Reinforcement Learning
url_code: ''
url_dataset: ''
url_pdf: 
url_poster: ''
url_project: ""
url_slides: ""
url_source: ''
url_video: ''
---
