const _region_ = "eu-central-1";

const dev = {
  s3: {
    REGION: (self._region_),
    BUCKET: "notes-app2-api-dev-attachmentsbucket-sbi3wz03cuym"
  },
  apiGateway: {
    REGION: (self._region_),
    URL: "https://8601mxz8ob.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: (self._region_),
    USER_POOL_ID: "eu-central-1_Z9sV0HKLI",
    APP_CLIENT_ID: "edjrv40idau5957cg86o33073",
    IDENTITY_POOL_ID: "eu-central-1:a50a1e9e-35fa-4a74-aad2-9b947ddaf46b"
  },
  STRIPE_KEY: "pk_test_HmPTPeQP6HBlUAdAN0G3htkC"
};

const prod = {
  s3: {
    REGION: (self._region_),
    BUCKET: "notes-app2-api-prod-attachmentsbucket-fgqbs9fbqksw"
  },
  apiGateway: {
    REGION: (self._region_),
    URL: "https://8601mxz8ob.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: (self._region_),
    USER_POOL_ID: "eu-central-1_Xazf7paRs",
    APP_CLIENT_ID: "32msgqv0arobobv6vmn7ud55os",
    IDENTITY_POOL_ID: "eu-central-1:e85cf4c6-32a2-4718-81c2-577a274c27d4"
  },
  STRIPE_KEY: "pk_test_HmPTPeQP6HBlUAdAN0G3htkC"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

