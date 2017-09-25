json.reservation do
  json.partial! "api/reservations/reservation", reservation: @reservation
end
