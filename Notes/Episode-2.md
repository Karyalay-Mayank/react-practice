# What is NPM
## A package manager used to take care of packages (like versions) which we install locally and remotelly.

# Use of package.json
## It is a configuration file of npm.

## There are two type of packages we install i.e. dev dependency and normal depency

## Dev dependencies are generally required in development phase only
## Normal dependencies are used in development phase as well as in production

## We can install a package as dev dependency by using: npm install -D package-name


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