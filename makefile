# 
# APP_NAME=mongotron
# BUILD_DIR=build
# RELEASE_DIR=release
# SRC_DIR=src
#
# clean:
# 	rm -rf $(BUILD_DIR)
# 	mkdir $(BUILD_DIR)
# 	rm -rf $(RELEASE_DIR)
# 	mkdir $(RELEASE_DIR)
#
# build: clean
# 	cp package.json $(BUILD_DIR)
# 	cp -R ./src/* ./$(BUILD_DIR)
#
# release: clean build
# 	asar pack $(BUILD_DIR) $(RELEASE_DIR)/$(APP_NAME).asar
#
# run: release
# 	electron $(RELEASE_DIR)/$(APP_NAME).asar
#
# postinstall:
# 	# cd ./node_modules; \
# 	# ln -snf ../src/app; \
# 	# ln -snf ../src/app/modules;
#
# .PHONY: build
