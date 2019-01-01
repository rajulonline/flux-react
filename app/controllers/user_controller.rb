class UserController < ApplicationController
	require "http"
	require "uri"

	def getUserDetails		
		uri = URI.join("https://api.github.com/users/", params[:userName])		
		@user = JSON.parse(HTTP.get(uri))
		render(json: @user)
	end
end