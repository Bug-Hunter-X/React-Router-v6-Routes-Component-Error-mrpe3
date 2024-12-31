# React Router v6 Route Configuration Error

This repository demonstrates a common error encountered when migrating from older versions of `react-router-dom` to v6. The error occurs because of an incorrect usage of the `Routes` component in v6.  The provided solution shows the correct way to configure routes with `react-router-dom` v6.

## Problem

When using `react-router-dom` v6, developers who are accustomed to v5 may attempt to configure routes using the legacy `Switch` component, resulting in a runtime error. The `Switch` component is no longer needed in v6, replaced by the `Routes` component.