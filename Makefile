.PHONY: help check-clean bump-patch bump-minor bump-major push-version \
        patch-release minor-release major-release

# Colores para output
GREEN  := \033[0;32m
YELLOW := \033[0;33m
RED    := \033[0;31m
NC     := \033[0m

help:
	@echo "Available commands:"
	@echo "  make patch-release  - Bump patch version (0.1.0 → 0.1.1)"
	@echo "  make minor-release  - Bump minor version (0.1.0 → 0.2.0)"
	@echo "  make major-release  - Bump major version (0.1.0 → 1.0.0)"

# ============================================
# Modular targets (executed in sequence)
# ============================================

# Step 1: Pre-release validations
check-clean:
	@echo "$(YELLOW)Checking release preconditions...$(NC)"
	@CURRENT_BRANCH=$$(git branch --show-current); \
	if [ "$$CURRENT_BRANCH" != "main" ]; then \
		echo "$(RED)✗ You can only release from the 'main' branch.$(NC)"; \
		echo "  Current branch: $$CURRENT_BRANCH"; \
		exit 1; \
	fi
	@CHANGES=$$(git status --porcelain package.json | wc -l); \
	if [ "$$CHANGES" -ne 0 ]; then \
		echo "$(RED)✗ package.json has uncommitted changes.$(NC)"; \
		echo "  Please commit or stash before releasing."; \
		exit 1; \
	fi
	@echo "$(GREEN)✓ package.json clean on main branch$(NC)"

# Step 2: Bump version (patch)
bump-patch:
	@CURRENT_VERSION=$$(node -p "require('./package.json').version"); \
	IFS='.' read -r MAJOR MINOR PATCH <<< "$$CURRENT_VERSION"; \
	PATCH=$$((PATCH + 1)); \
	NEW_VERSION="$$MAJOR.$$MINOR.$$PATCH"; \
	echo "$(YELLOW)Bump: $$CURRENT_VERSION → $$NEW_VERSION$(NC)"; \
	node -e "const pkg=require('./package.json'); pkg.version='$$NEW_VERSION'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')"

# Step 2: Bump version (minor)
bump-minor:
	@CURRENT_VERSION=$$(node -p "require('./package.json').version"); \
	IFS='.' read -r MAJOR MINOR PATCH <<< "$$CURRENT_VERSION"; \
	MINOR=$$((MINOR + 1)); \
	PATCH=0; \
	NEW_VERSION="$$MAJOR.$$MINOR.$$PATCH"; \
	echo "$(YELLOW)Bump: $$CURRENT_VERSION → $$NEW_VERSION$(NC)"; \
	node -e "const pkg=require('./package.json'); pkg.version='$$NEW_VERSION'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')"

# Step 2: Bump version (major)
bump-major:
	@CURRENT_VERSION=$$(node -p "require('./package.json').version"); \
	IFS='.' read -r MAJOR MINOR PATCH <<< "$$CURRENT_VERSION"; \
	MAJOR=$$((MAJOR + 1)); \
	MINOR=0; \
	PATCH=0; \
	NEW_VERSION="$$MAJOR.$$MINOR.$$PATCH"; \
	echo "$(YELLOW)Bump: $$CURRENT_VERSION → $$NEW_VERSION$(NC)"; \
	node -e "const pkg=require('./package.json'); pkg.version='$$NEW_VERSION'; require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')"

# Step 3: Commit, tag and push (reads version from package.json)
push-version:
	@NEW_VERSION=$$(node -p "require('./package.json').version"); \
	echo "$(YELLOW)Committing changes...$(NC)"; \
	git add package.json; \
	git commit -m "chore: release v$$NEW_VERSION"; \
	echo "$(YELLOW)Creating tag v$$NEW_VERSION...$(NC)"; \
	git tag -a "v$$NEW_VERSION" -m "Release v$$NEW_VERSION"; \
	echo "$(YELLOW)Pushing to origin...$(NC)"; \
	git push origin main --tags; \
	echo "$(GREEN)✓ Release v$$NEW_VERSION complete!$(NC)"

# ============================================
# Main commands (composed)
# ============================================

patch-release: check-clean bump-patch push-version

minor-release: check-clean bump-minor push-version

major-release: check-clean bump-major push-version
