class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :login?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def login?
    !!current_user
  end

  def require_login
    unless current_user
      render json: {base: ['Invalid credentials']}, status: 401
    end
  end
  
end
