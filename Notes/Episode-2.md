# What is NPM
**## **A package manager used to take care of packages (like versions) which we install locally and remotelly.**

# Use of package.json
**It is a configuration file of npm.**
**It keeps the track of the versions of installed packages**

**There are two type of packages we install i.e. dev dependency and normal depency**

- Dev dependencies are generally required in development phase only
- Normal dependencies are used in development phase as well as in production

- We can install a package as dev dependency by using: `npm install -D package-name`


# Version Ranges: `~` i.e Tilde vs `^` i.e Caret

## `~version` (Tilde)

- **Meaning**: "Approximately equivalent to version"
- **Example**: `~1.2.3`
- **Allowed Updates**: Patch versions only
- **Version Range**: `>=1.2.3` and `<1.3.0`
- **Use When**: You want **only bug fixes**, no new features.

## `^version` (Caret)

- **Meaning**: "Compatible with version"
- **Example**: `^1.2.3`
- **Allowed Updates**: Minor and patch versions
- **Version Range**: `>=1.2.3` and `<2.0.0`
- **Use When**: You want **new features and fixes**, but no breaking changes.

---

## Summary

| Symbol | Updates Allowed     | Version Range     | Use Case                  |
|--------|---------------------|-------------------|----------------------------|
| `~`    | Patch only          | `1.2.3` to `<1.3.0` | Safe updates, no new features |
| `^`    | Minor + Patch       | `1.2.3` to `<2.0.0` | New features, still compatible |


# Use of package-lock.json
**It keeps the track of exact version i.e installed currently.**
- **Intergity**: Use to keep exact hash of current used version to eliminate conflict on production and in other developer's system 


# Ignite app using parcel (the currently used Bundler)
- **To use parcel as a bundler we have to install it in our project by doing: `npm install -D parcel`**
- **To ignite our app with parcel we have to do `npx parcel index.html`**

## Use of Parcel
- Dev Build
- Run Locl Server
- Hot Module Replacement - HMR
- Use a File watching algorithm which is written in C++
- Caching - Falster Builds (Store cache in .parcel-cache folder)
- Image Optimization
- Minification of Files
- Bundling
- Compression of files
- Consistent Hashing
- Code Splitting
- Differential Bundling (To support older browsers means different bundles for different Browsers)
- Diagnostics
- Error Handling and suggestions
- Gives way to move from HTTP to HTTPS
- Tree Shaking (Removing unused code)
- Different dev and production build (by build command for prod i.e. `npx parcel build index.html` , it will create a `dist` folder)