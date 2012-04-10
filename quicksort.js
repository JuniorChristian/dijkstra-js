function quickSort( array ) {
   if( array.length <= 1 )
      return array

   var lhs = new Array();
   var rhs = new Array();
   var pivot = Math.ceil(array.length/2)-1;

   pivot = array.splice(pivot, 1)[0];

   for( var i = 0; i < array.length; i++ )
      if( array[i] <= pivot )
         lhs.push(array[i]);
      else
         rhs.push(array[i]);

   var t1 = quickSort(lhs);
   var t2 = quickSort(rhs);

   t1.push(pivot);
   return t1.concat(t2);
}