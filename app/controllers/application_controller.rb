class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :login?, :logout, :login

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = self.reset_session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def login?
    !!current_user
  end

  def require_login
    redirect_to new_session_url unless login?
  end
end
