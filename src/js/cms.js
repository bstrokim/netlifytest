import React from "react";
import CMS from "netlify-cms-app";
import * as ColorWidget from "netlify-cms-widget-color";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ValuesPreview from "./cms-preview-templates/values";
import ContactPreview from "./cms-preview-templates/contact";
import Pages2Preview from "./cms-preview-templates/pages2";

CMS.registerWidget("color", ColorWidget.Control);

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewStyle('https://unpkg.com/netlify-cms-yoast-seo@~1.0/dist/main.css');

CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("values", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("pages2", Pages2Preview);
CMS.init();
