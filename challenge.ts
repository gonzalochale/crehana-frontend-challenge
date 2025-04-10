function canSellTickets(ticketsToSale: number[]) {
  const ticketCost = 25;
  const bank: number[] = [];

  for (let i = 0; i < ticketsToSale.length; i++) {
    // primero calculo el cambio a devolver tomando en cuenta que solo puede ser 0, 25 o 75 basandome en los billetes disponibles para pagar que son 25,50,100
    const currentTicketBill = ticketsToSale[i];
    const moneyToReturn = currentTicketBill - ticketCost;

    // si el cliente paga coon 25 es decir no necesita cambio solo ejecuto la venta
    if (moneyToReturn === 0) {
      bank.push(ticketsToSale[i]);
      continue;
    }

    //si el cliente paga con 50 necesito buscar un billete de 25 en mi bank o rechazar la venta
    if (moneyToReturn === 25) {
      const isEnoughMoneyAvailableToReturn = bank.indexOf(25);
      if (isEnoughMoneyAvailableToReturn === -1) return false;
      bank.splice(isEnoughMoneyAvailableToReturn, 1);
      bank.push(currentTicketBill);
      continue;
    }

    //si el cliente paga con 100 necesito buscar 75 en mi bank ya sea uno de 50 y 75 o 3 de 25
    if (moneyToReturn === 75) {
      if (bank.includes(50) && bank.includes(25)) {
        const billOf50 = bank.indexOf(50);
        const billOf25 = bank.indexOf(25);

        if (billOf50 !== -1 && billOf25 !== -1) {
          bank.splice(billOf50, 1);
          bank.splice(billOf25 > billOf50 ? billOf25 - 1 : billOf25, 1);
          bank.push(currentTicketBill);
          continue;
        }
      } else if (bank.filter((b) => b === 25).length >= 3) {
        let count = 0;
        for (let i = 0; i < bank.length && count < 3; ) {
          if (bank[i] === 25) {
            bank.splice(i, 1);
            count++;
          } else {
            i++;
          }
        }
        if (count < 3) {
          return false;
        }
        bank.push(currentTicketBill);
        continue;
      }
      return false;
    }
  }

  return true;
}

canSellTickets([25, 100]); // false
canSellTickets([25, 25, 50]); //true
canSellTickets([25, 25, 50, 50, 100]); // false
