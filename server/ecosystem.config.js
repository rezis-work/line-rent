module.export = {
  apps: [
    {
      name: "project-manajment",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
