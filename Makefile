build:
	pnpm build

patch-amatelas-react:
	cd packages/amatelas/react; npm version patch
patch-amatelas-theme:
	cd packages/amatelas/theme; npm version patch
patch: patch-amatelas-react patch-amatelas-theme

publish-amatelas-react:
	cd packages/amatelas/react; npm publish
publish-amatelas-theme:
	cd packages/amatelas/theme; npm publish

publish: build publish-amatelas-react publish-amatelas-theme
patch-publish: patch publish
